export interface FormGroupProps {
  /** Optional group heading (rendered as a legend). */
  legend?: string;
  /** Caption below the grouped fields. */
  helperText?: string;
  children?: React.ReactNode;
}

export function FormGroup(props: FormGroupProps): JSX.Element;
