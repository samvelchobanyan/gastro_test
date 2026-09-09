export interface SpinnerProps {
  /** Diameter in px. Default 24. */
  size?: number;
  thickness?: number;
  /** Use on dark surfaces/buttons (white head). */
  onDark?: boolean;
  label?: string;
}

export function Spinner(props: SpinnerProps): JSX.Element;
