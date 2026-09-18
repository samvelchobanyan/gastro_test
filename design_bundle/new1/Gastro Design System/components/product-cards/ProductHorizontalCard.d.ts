export interface ProductHorizontalCardProps {
  /** Product name — Body Small. */
  name?: string;
  /** Price line — Body Extra Small (pre-formatted string). */
  price?: string;
  /** Product photo URL. Placeholder when null. */
  imageUrl?: string | null;
  /** Square image size in px. Default 64 (half the vertical card's 128 width). */
  imageSize?: number;
  onClick?: () => void;
}

export function ProductHorizontalCard(props: ProductHorizontalCardProps): JSX.Element;
