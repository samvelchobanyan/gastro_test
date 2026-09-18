export interface RatingStarsProps {
  /** Current rating. Supports halves in read-only mode. */
  value?: number;
  max?: number;
  /** Star glyph size in px. Default 20. */
  size?: number;
  /** Display-only (default) vs interactive input. */
  readOnly?: boolean;
  onChange?: (value: number) => void;
  /** Optional review-count label, e.g. 128 → "(128)". */
  count?: number;
}

export function RatingStars(props: RatingStarsProps): JSX.Element;
