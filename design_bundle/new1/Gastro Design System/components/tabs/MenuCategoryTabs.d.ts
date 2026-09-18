export interface MenuCategoryTabsProps {
  /** Plain strings or `{ key, label }` objects. */
  categories?: Array<{ key: string; label: string } | string>;
  activeKey?: string;
  onChange?: (key: string) => void;
}

export function MenuCategoryTabs(props: MenuCategoryTabsProps): JSX.Element;
