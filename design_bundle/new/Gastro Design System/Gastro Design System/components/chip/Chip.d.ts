export interface ChipProps {
  label?: string;
  /** Optional leading Phosphor icon (hidden when selected — replaced by a check). */
  icon?: string;
  /** Selected/filled state. */
  selected?: boolean;
  /** Makes the chip a toggle button. */
  onClick?: (e: React.MouseEvent) => void;
  /** When set, renders a trailing remove (x). */
  onRemove?: () => void;
  /** sm 24 · md 32 (default). */
  size?: 'sm' | 'md';
}

export function Chip(props: ChipProps): JSX.Element;
