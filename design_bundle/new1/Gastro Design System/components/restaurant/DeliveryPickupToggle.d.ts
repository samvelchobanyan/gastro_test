export interface DeliveryPickupToggleProps {
  value?: 'delivery' | 'pickup';
  onChange?: (value: 'delivery' | 'pickup') => void;
}

export function DeliveryPickupToggle(props: DeliveryPickupToggleProps): JSX.Element;
