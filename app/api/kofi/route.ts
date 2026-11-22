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
  name
    .replace(/\p{C}/gu, "")
    .trim()
    .slice(0, 40);

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
    return new Response("ok");
  }

  try {
    await addDonation(name, amount);
  } catch (error) {
    console.error(error);

    return new Response("failed", { status: 500 });
  }

  return new Response("ok");
}
