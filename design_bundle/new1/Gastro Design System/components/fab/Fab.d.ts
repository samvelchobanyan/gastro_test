export interface FabProps {
  /** Phosphor icon name. Default `plus`. */
  icon?: string;
  /** Optional label — when set renders an extended (pill) FAB. */
  label?: string;
  /** `md` 56 (default) or `lg` 64. */
  size?: 'md' | 'lg';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** Accessible label (used when no visible `label`). */
  ariaLabel?: string;
}

export function Fab(props: FabProps): JSX.Element;
