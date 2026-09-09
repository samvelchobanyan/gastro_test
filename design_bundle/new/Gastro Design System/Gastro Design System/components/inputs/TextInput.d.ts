export interface TextInputProps {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  /** Caption below the field. Turns red with a warning icon when `error`. */
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  /** `fixed` 48px (default) or `floating` 56px. */
  size?: 'fixed' | 'floating';
  type?: 'text' | 'email' | 'tel' | 'password' | 'number';
  /** Phosphor icon before the input. */
  iconLeft?: string;
  /** Phosphor icon after the input. */
  iconRight?: string;
  id?: string;
}

export function TextInput(props: TextInputProps): JSX.Element;
