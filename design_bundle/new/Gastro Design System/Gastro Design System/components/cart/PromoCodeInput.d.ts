export interface AppliedPromo {
  code: string;
  amount: number;
}

export interface PromoCodeInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onApply?: (code: string) => void;
  /** When set, renders the applied/success state instead of the input. */
  applied?: AppliedPromo | null;
  onRemove?: () => void;
  error?: string;
}

export function PromoCodeInput(props: PromoCodeInputProps): JSX.Element;
