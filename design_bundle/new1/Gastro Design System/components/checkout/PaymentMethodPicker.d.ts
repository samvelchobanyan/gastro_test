export interface PaymentMethod {
  id: string;
  type: 'card' | 'apple-pay' | 'google-pay' | 'cash';
  last4?: string;
  label?: string;
}

export interface PaymentMethodPickerProps {
  methods?: PaymentMethod[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  onAddNew?: () => void;
}

export function PaymentMethodPicker(props: PaymentMethodPickerProps): JSX.Element;
