import { readSupporters, tierSupporters } from "@/lib/supporters";
import { connection } from "next/server";

// names and tiers only, the same thing the landing page shows: totals stay private
export async function GET() {
  // read per request from persistent storage, never baked in at build
  await connection();

  const supporters = await readSupporters();

  return Response.json(tierSupporters(supporters));
}
