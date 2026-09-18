export interface RadioProps {
  checked?: boolean;
  onChange?: (value: any) => void;
  label?: string;
  value?: any;
  name?: string;
  disabled?: boolean;
  id?: string;
}

export interface RadioGroupProps {
  /** `{ label, value }` objects or plain strings. */
  options?: Array<{ label: string; value: any } | string>;
  value?: any;
  onChange?: (value: any) => void;
  name?: string;
}

export function Radio(props: RadioProps): JSX.Element;
export function RadioGroup(props: RadioGroupProps): JSX.Element;
