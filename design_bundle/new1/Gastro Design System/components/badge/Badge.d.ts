export interface BadgeProps {
  /** Numeric count. Clamps to `max` (e.g. 99+). */
  count?: number;
  /** Render a small presence dot instead of a number. */
  dot?: boolean;
  max?: number;
  tone?: 'error' | 'brand' | 'success' | 'neutral';
  /** Element to overlay the badge onto (e.g. an icon). Standalone if omitted. */
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
