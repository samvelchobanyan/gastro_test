export interface CartSummaryBarProps {
  itemCount?: number;
  total?: number;
  onOpen?: () => void;
}

export function CartSummaryBar(props: CartSummaryBarProps): JSX.Element | null;
