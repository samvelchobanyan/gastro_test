export interface DropdownOption {
  label: string;
  value: string | number;
}

export interface DropdownProps {
  /** Options as `{ label, value }` objects or plain strings. */
  options?: Array<DropdownOption | string>;
  /** Currently selected value (controlled). */
  value?: string | number | null;
  /** Text shown when nothing is selected. Default "Select…". */
  placeholder?: string;
  /** Optional field label rendered above the control. */
  label?: string | null;
  /** Helper or error text shown below the field. */
  helperText?: string | null;
  /** Disables the control (30–38% opacity). */
  disabled?: boolean;
  /** Error state — red border + alert icon on helper text. */
  error?: boolean;
  /** Field height. `fixed` = 48px (default), `floating` = 56px. */
  size?: 'fixed' | 'floating';
  /** Called with the chosen option's value. */
  onChange?: (value: string | number) => void;
  /** DOM id, linked to the label. */
  id?: string;
}

export function Dropdown(props: DropdownProps): JSX.Element;
