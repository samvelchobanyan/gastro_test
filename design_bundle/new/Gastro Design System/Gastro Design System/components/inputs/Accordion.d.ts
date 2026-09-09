export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items?: AccordionItem[];
  /** Allow multiple panels open at once. Default false (single-open). */
  allowMultiple?: boolean;
  /** Indices open on mount. */
  defaultOpen?: number[];
}

export function Accordion(props: AccordionProps): JSX.Element;
