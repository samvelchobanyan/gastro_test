export interface EmptyStateProps {
  /** Phosphor icon name. */
  icon?: string;
  title?: string;
  description?: string;
  /** Optional primary action button. */
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState(props: EmptyStateProps): JSX.Element;
