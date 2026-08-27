import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { AttentionAlert } from "@/components/mdx/alert";
import { Accordion, AccordionItem } from "@/components/mdx/accordion";
import { NetcupBanner } from "@/components/mdx/netcup-banner";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Alert: AttentionAlert,
    Accordion,
    AccordionItem,
    NetcupBanner,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img: (props) => <ImageZoom {...(props as any)} />,
    ...components,
  };
}
