// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"common-questions.mdx": () => import("../content/docs/common-questions.mdx?collection=docs"), "configuration.mdx": () => import("../content/docs/configuration.mdx?collection=docs"), "contributing.mdx": () => import("../content/docs/contributing.mdx?collection=docs"), "https-setup.mdx": () => import("../content/docs/https-setup.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "license.mdx": () => import("../content/docs/license.mdx?collection=docs"), "troubleshooting.mdx": () => import("../content/docs/troubleshooting.mdx?collection=docs"), "introduction/owner-permissions.mdx": () => import("../content/docs/introduction/owner-permissions.mdx?collection=docs"), "introduction/quick-start.mdx": () => import("../content/docs/introduction/quick-start.mdx?collection=docs"), "introduction/what-is-sharkord.mdx": () => import("../content/docs/introduction/what-is-sharkord.mdx?collection=docs"), "plugins/api-reference.mdx": () => import("../content/docs/plugins/api-reference.mdx?collection=docs"), "plugins/commands.mdx": () => import("../content/docs/plugins/commands.mdx?collection=docs"), "plugins/getting-started.mdx": () => import("../content/docs/plugins/getting-started.mdx?collection=docs"), "plugins/installation.mdx": () => import("../content/docs/plugins/installation.mdx?collection=docs"), "plugins/overview.mdx": () => import("../content/docs/plugins/overview.mdx?collection=docs"), "introduction/installation/docker.mdx": () => import("../content/docs/introduction/installation/docker.mdx?collection=docs"), "introduction/installation/linux.mdx": () => import("../content/docs/introduction/installation/linux.mdx?collection=docs"), "introduction/installation/windows.mdx": () => import("../content/docs/introduction/installation/windows.mdx?collection=docs"), }),
};
export default browserCollections;