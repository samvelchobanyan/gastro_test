export interface CheckboxProps {
  checked?: boolean;
  /** Renders a dash instead of a tick (partial selection). */
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  id?: string;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
