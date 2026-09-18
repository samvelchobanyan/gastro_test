export interface SimpleListItemProps {
  /** Row text. */
  label?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
}

export function SimpleListItem(props: SimpleListItemProps): JSX.Element;
