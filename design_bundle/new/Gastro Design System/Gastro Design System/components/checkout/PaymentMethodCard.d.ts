export interface PaymentMethodCardProps {
  type?: 'card' | 'apple-pay' | 'google-pay' | 'cash';
  /** Last 4 digits for `card`. */
  last4?: string;
  /** Custom label overriding the derived title. */
  label?: string;
  selected?: boolean;
  onClick?: () => void;
}

export function PaymentMethodCard(props: PaymentMethodCardProps): JSX.Element;
