const REGISTRY_URL =
  "https://raw.githubusercontent.com/Sharkord/plugins/main/plugins.json";

export type PluginVersion = {
  version: string;
  downloadUrl: string;
  sdkVersion: number;
  size: number;
  timestamp: number;
};

export type PluginEntry = {
  plugin: {
    id: string;
    name: string;
    description: string;
    author: string;
    logo?: string;
    homepage?: string;
    verified: boolean;
    screenshots: string[];
  };
  versions: PluginVersion[];
};

export type Plugin = PluginEntry["plugin"] & {
  latest: PluginVersion | null;
};

export async function getPlugins(): Promise<Plugin[] | null> {
  try {
    const response = await fetch(REGISTRY_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return null;
    }

    const entries = (await response.json()) as PluginEntry[];

    return entries
      .map((entry) => {
        const [latest] = [...entry.versions].sort(
          (a, b) => b.timestamp - a.timestamp,
        );

        return { ...entry.plugin, latest: latest ?? null };
      })
      .sort(
        (a, b) =>
          Number(b.verified) - Number(a.verified) ||
          (b.latest?.timestamp ?? 0) - (a.latest?.timestamp ?? 0),
      );
  } catch {
    // null tells the page to point people at the registry instead of showing an empty list
    return null;
  }
}
