import { addDonation } from "@/lib/supporters";
import { timingSafeEqual } from "node:crypto";

type KofiPayload = {
  verification_token: string;
  is_public: boolean;
  from_name: string;
  amount: string;
};

// ko-fi fills this in when the donor leaves the name empty, so it is not a person to credit
const ANONYMOUS_NAME = "Ko-fi Supporter";

const tokenMatches = (token: string) => {
  const expected = Buffer.from(process.env.KOFI_VERIFICATION_TOKEN ?? "");
  const received = Buffer.from(token);

  return (
    expected.length > 0 &&
    expected.length === received.length &&
    timingSafeEqual(expected, received)
  );
};

const cleanName = (name: string) =>
  name.replace(/\p{C}/gu, "").trim().slice(0, 40);

// relays every verified webhook (private ones too, the plugin hides those) to
// the demo server's plugin, e.g. https://demo.example/plugins/demo-plugin/kofi.
// Runs after the donation is saved, because the plugin reloads /api/supporters
// when it gets one. Never fails the request: a non-200 makes ko-fi retry and
// count the donation twice.
const forwardToSharkord = async (raw: string) => {
  const url = process.env.KOFI_FORWARD_URL;

  if (!url) return;

  try {
    const res = await fetch(url, {
      method: "POST",
      body: new URLSearchParams({ data: raw }),
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) console.error(`ko-fi forward got ${res.status}`);
  } catch (error) {
    console.error("ko-fi forward failed", error);
  }
};

export async function POST(request: Request) {
  const form = await request.formData();
  const raw = form.get("data");

  if (typeof raw !== "string") {
    return new Response("bad request", { status: 400 });
  }

  let payload: KofiPayload;

  try {
    payload = JSON.parse(raw);
  } catch {
    return new Response("bad request", { status: 400 });
  }

  if (!tokenMatches(String(payload.verification_token))) {
    return new Response("unauthorized", { status: 401 });
  }

  const name = cleanName(String(payload.from_name ?? ""));
  // ponytail: amounts are summed as plain numbers, every donation so far is in euros, convert if other currencies show up
  const amount = Number(payload.amount);

  if (
    !payload.is_public ||
    !name ||
    name === ANONYMOUS_NAME ||
    !Number.isFinite(amount) ||
    amount <= 0
  ) {
    await forwardToSharkord(raw);

    return new Response("ok");
  }

  try {
    await addDonation(name, amount);
  } catch (error) {
    console.error(error);

    // ko-fi retries this, and the retry is the one that gets forwarded
    return new Response("failed", { status: 500 });
  }

  await forwardToSharkord(raw);

  return new Response("ok");
}
