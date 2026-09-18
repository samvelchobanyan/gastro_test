export interface OrderHistoryCardProps {
  restaurantName?: string;
  date?: string;
  /** e.g. "Margherita Pizza, Caesar Salad +1 more". */
  itemsSummary?: string;
  total?: number;
  status?: string;
  onClick?: (e: React.MouseEvent) => void;
  /** Trailing action node, e.g. a ReorderButton. */
  actions?: React.ReactNode;
}

export function OrderHistoryCard(props: OrderHistoryCardProps): JSX.Element;
