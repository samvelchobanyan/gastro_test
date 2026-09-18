export interface MenuItemCardProps {
  /** Dish name (Heading 3). */
  name?: string;
  /** Short description — clamped to 2 lines. */
  description?: string;
  /** Numeric price, formatted to 2 decimals. */
  price?: number;
  /** Currency symbol prefixed to the price. Default "$". */
  currency?: string;
  /** Dish photo URL. Falls back to a neutral placeholder. */
  imageUrl?: string | null;
  /** Optional overline badge, e.g. "Popular", "New", "Chef's pick". */
  tag?: string | null;
  /** Current quantity in cart. 0 shows an Add button; > 0 shows a Stepper. */
  quantity?: number;
  /** Called when the Add (+) button is tapped. */
  onAdd?: () => void;
  /** Called with the new quantity from the inline Stepper. */
  onQuantityChange?: (quantity: number) => void;
}

export function MenuItemCard(props: MenuItemCardProps): JSX.Element;
