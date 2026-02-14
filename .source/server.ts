// @ts-nocheck
import * as __fd_glob_21 from "../content/docs/introduction/installation/windows.mdx?collection=docs"
import * as __fd_glob_20 from "../content/docs/introduction/installation/linux.mdx?collection=docs"
import * as __fd_glob_19 from "../content/docs/introduction/installation/docker.mdx?collection=docs"
import * as __fd_glob_18 from "../content/docs/plugins/overview.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/plugins/installation.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/plugins/getting-started.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/plugins/commands.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/plugins/api-reference.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/introduction/what-is-sharkord.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/introduction/quick-start.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/introduction/owner-permissions.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/troubleshooting.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/license.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/https-setup.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/contributing.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/configuration.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/common-questions.mdx?collection=docs"
import { default as __fd_glob_3 } from "../content/docs/introduction/installation/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/plugins/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/introduction/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "introduction/meta.json": __fd_glob_1, "plugins/meta.json": __fd_glob_2, "introduction/installation/meta.json": __fd_glob_3, }, {"common-questions.mdx": __fd_glob_4, "configuration.mdx": __fd_glob_5, "contributing.mdx": __fd_glob_6, "https-setup.mdx": __fd_glob_7, "index.mdx": __fd_glob_8, "license.mdx": __fd_glob_9, "troubleshooting.mdx": __fd_glob_10, "introduction/owner-permissions.mdx": __fd_glob_11, "introduction/quick-start.mdx": __fd_glob_12, "introduction/what-is-sharkord.mdx": __fd_glob_13, "plugins/api-reference.mdx": __fd_glob_14, "plugins/commands.mdx": __fd_glob_15, "plugins/getting-started.mdx": __fd_glob_16, "plugins/installation.mdx": __fd_glob_17, "plugins/overview.mdx": __fd_glob_18, "introduction/installation/docker.mdx": __fd_glob_19, "introduction/installation/linux.mdx": __fd_glob_20, "introduction/installation/windows.mdx": __fd_glob_21, });