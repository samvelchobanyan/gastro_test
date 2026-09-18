export interface OrderTotalBreakdownProps {
  subtotal?: number;
  deliveryFee?: number;
  serviceFee?: number;
  /** Positive value; rendered as a negative (green) line. */
  discount?: number;
  tax?: number;
}

export function OrderTotalBreakdown(props: OrderTotalBreakdownProps): JSX.Element;
