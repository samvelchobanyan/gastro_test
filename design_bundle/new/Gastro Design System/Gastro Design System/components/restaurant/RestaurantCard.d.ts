export interface RestaurantCardProps {
  image?: string;
  name?: string;
  cuisine?: string;
  rating?: number;
  reviewCount?: number;
  deliveryTime?: string;
  /** 0 shows "Free delivery"; omit to hide the fee entirely. */
  deliveryFee?: number;
  closed?: boolean;
  /** Promo ribbon, e.g. "20% off". */
  promoLabel?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function RestaurantCard(props: RestaurantCardProps): JSX.Element;
