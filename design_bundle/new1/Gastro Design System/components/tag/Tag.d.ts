export interface TagProps {
  label?: string;
  /** Optional leading Phosphor icon. */
  icon?: string;
  tone?: 'neutral' | 'brand' | 'success' | 'warning' | 'error';
  /** sm 24 · md 32 (default). */
  size?: 'sm' | 'md';
}

export function Tag(props: TagProps): JSX.Element;
