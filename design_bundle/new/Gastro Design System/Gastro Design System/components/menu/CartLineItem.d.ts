export interface CartLineItemProps {
  image?: string;
  name?: string;
  /** Modifier summary line, e.g. "Large, extra cheese". */
  modifiers?: string;
  price?: number;
  qty?: number;
  /** Omit for a read-only ×N quantity (order history). */
  onQtyChange?: (qty: number) => void;
  /** Shows a "Remove" text action when set. */
  onRemove?: () => void;
}

export function CartLineItem(props: CartLineItemProps): JSX.Element;
