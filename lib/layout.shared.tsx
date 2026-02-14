import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const gitConfig = {
  user: "Sharkord",
  repo: "sharkord",
  branch: "development",
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Sharkord",
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
