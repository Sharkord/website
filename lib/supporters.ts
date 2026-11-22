import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

export type TSupporter = { name: string; total: number };

// ./data is mounted as persistent storage in production, anything written elsewhere is lost on redeploy
const DATA_DIR = path.join(process.cwd(), "data");
const SUPPORTERS_FILE = path.join(DATA_DIR, "supporters.json");

export async function readSupporters(): Promise<TSupporter[]> {
  try {
    return JSON.parse(await readFile(SUPPORTERS_FILE, "utf8"));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

// the readme image and the landing page both show supporters in these three tiers
export function tierSupporters(supporters: TSupporter[]) {
  const names = supporters.map(({ name }) => name);

  return {
    podium: names.slice(0, 3),
    champions: names.slice(3, 12),
    rest: names.slice(12),
  };
}

let queue = Promise.resolve();

// ponytail: in-process queue, enough for one container, needs a real lock if the site ever runs as several replicas
export function addDonation(name: string, amount: number) {
  const run = queue.then(async () => {
    const supporters = await readSupporters();
    const existing = supporters.find((supporter) => supporter.name === name);

    if (existing) {
      existing.total = Math.round((existing.total + amount) * 100) / 100;
    } else {
      supporters.push({ name, total: amount });
    }

    supporters.sort((a, b) => b.total - a.total);

    // write then rename so a crash mid-write never leaves a half written file behind
    const temp = `${SUPPORTERS_FILE}.tmp`;

    await mkdir(DATA_DIR, { recursive: true });
    await writeFile(temp, JSON.stringify(supporters, null, 2));
    await rename(temp, SUPPORTERS_FILE);
  });

  queue = run.catch(() => {});

  return run;
}
