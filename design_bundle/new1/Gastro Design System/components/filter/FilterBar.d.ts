export interface FilterBarProps {
  label?: string;
  /** Phosphor icon name. Default `fork-knife`. */
  icon?: string;
  selected?: boolean;
  onClick?: () => void;
}

export function FilterBar(props: FilterBarProps): JSX.Element;
