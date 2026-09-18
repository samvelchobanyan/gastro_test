export interface StepperProps {
  /** Current numeric value (controlled). */
  value?: number;
  /** Minimum allowed value. Decrement disables at this bound. Default 0. */
  min?: number;
  /** Maximum allowed value. Increment disables at this bound. Default 99. */
  max?: number;
  /** Amount added/removed per tap. Default 1. */
  step?: number;
  /** Visual size. `md` = 40px (default), `sm` = 32px (compact/inline). */
  size?: 'sm' | 'md';
  /** Disables the whole control (30–38% opacity). */
  disabled?: boolean;
  /** Called with the next clamped value. */
  onChange?: (value: number) => void;
  /** Accessible label for the group. Default "Quantity". */
  ariaLabel?: string;
}

export function Stepper(props: StepperProps): JSX.Element;
