export interface AdvancedListItemProps {
  title?: string;
  subtitle?: string;
  /** Phosphor icon in a tinted leading tile. */
  leadingIcon?: string;
  /** Custom leading node (e.g. an Avatar) — takes precedence over leadingIcon. */
  leadingAvatar?: React.ReactNode;
  /** Trailing node — value text, control, etc. */
  trailing?: React.ReactNode;
  /** Show a trailing chevron (navigational rows). */
  chevron?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
}

export function AdvancedListItem(props: AdvancedListItemProps): JSX.Element;
