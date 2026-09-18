export interface MenuTabItem {
  label: string;
  value: string;
  /** Category image URL. Placeholder when omitted. */
  image?: string;
}

export interface MenuTabsProps {
  /** Category pills, each with an image + name. */
  categories?: MenuTabItem[];
  /** Selected category value. */
  value?: string | null;
  onChange?: (value: string) => void;
}

export function MenuTabs(props: MenuTabsProps): JSX.Element;
