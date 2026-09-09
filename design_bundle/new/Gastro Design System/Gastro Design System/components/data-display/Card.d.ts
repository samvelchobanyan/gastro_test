export interface CardProps {
  children?: React.ReactNode;
  /** Internal padding preset. Default `base` (16px). */
  padding?: 'none' | 'sm' | 'base' | 'lg';
  /** Adds press feedback + button semantics. */
  interactive?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** Subtle shadow. Default true. */
  elevated?: boolean;
  /** Extra inline style overrides. */
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
