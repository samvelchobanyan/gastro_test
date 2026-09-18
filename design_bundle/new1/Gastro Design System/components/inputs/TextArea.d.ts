export interface TextAreaProps {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  /** Initial visible rows. Default 4. */
  rows?: number;
  /** Optional cap; shows an X/Y counter. */
  maxLength?: number;
  id?: string;
}

export function TextArea(props: TextAreaProps): JSX.Element;
