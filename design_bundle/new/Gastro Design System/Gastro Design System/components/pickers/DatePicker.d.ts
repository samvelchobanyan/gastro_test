export interface DatePickerProps {
  /** Selected date, ISO `YYYY-MM-DD`. */
  value?: string;
  onChange?: (value: string) => void;
  /** How many days from today to offer. Default 14. */
  daysAhead?: number;
  label?: string;
}

export function DatePicker(props: DatePickerProps): JSX.Element;
