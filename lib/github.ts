export const SERVER_REPO = "Sharkord/sharkord";
export const DESKTOP_REPO = "Sharkord/sharkord-desktop";

export type RepoStats = {
  stars: number | null;
  version: string | null;
};

export type DesktopRelease = {
  version: string | null;
  assets: { name: string; url: string }[];
};

async function fetchJson<T>(repo: string, path: string): Promise<T | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${repo}${path}`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    // the page still renders without the numbers if github is down or rate limits us
    return null;
  }
}

export async function getRepoStats(): Promise<RepoStats> {
  const [repo, release] = await Promise.all([
    fetchJson<{ stargazers_count: number }>(SERVER_REPO, ""),
    fetchJson<{ tag_name: string }>(SERVER_REPO, "/releases/latest"),
  ]);

  return {
    stars: repo?.stargazers_count ?? null,
    version: release?.tag_name ?? null,
  };
}

// desktop file names carry the version, so there is no stable latest/download link for them
export async function getDesktopRelease(): Promise<DesktopRelease> {
  const release = await fetchJson<{
    tag_name: string;
    assets: { name: string; browser_download_url: string }[];
  }>(DESKTOP_REPO, "/releases/latest");

  return {
    version: release?.tag_name ?? null,
    assets:
      release?.assets.map((asset) => ({
        name: asset.name,
        url: asset.browser_download_url,
      })) ?? [],
  };
}

export function formatStars(stars: number) {
  return stars >= 1000 ? `${(stars / 1000).toFixed(1)}k` : String(stars);
}
