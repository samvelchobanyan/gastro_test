export interface RestaurantHeaderProps {
  /** Cover photo URL; a default restaurant photo is used if omitted. */
  coverImage?: string;
  name?: string;
  /** Short tagline shown under the name, overlaid on the cover. */
  description?: string;
  rating?: number;
  reviewCount?: number;
  isOpen?: boolean;
  /** Shows a back button over the cover when set. */
  onBack?: () => void;
}

export function RestaurantHeader(props: RestaurantHeaderProps): JSX.Element;
