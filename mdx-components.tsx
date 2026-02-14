import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { AttentionAlert } from '@/components/mdx/alert';
import { Accordion, AccordionItem } from '@/components/mdx/accordion';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Alert: AttentionAlert,
    Accordion,
    AccordionItem,
    ...components,
  };
}
