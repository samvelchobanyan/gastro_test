export interface FilterProps {
  label?: string;
  /** Phosphor icon name. Default `fork-knife`. */
  icon?: string;
  selected?: boolean;
  onClick?: () => void;
}

export function Filter(props: FilterProps): JSX.Element;
