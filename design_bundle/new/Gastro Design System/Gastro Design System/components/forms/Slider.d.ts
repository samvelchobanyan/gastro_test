export interface SliderProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  /** Formatter for the readout, e.g. `(v) => '$' + v`. */
  formatValue?: (value: number) => string;
  /** Show the current value above the track. Default true. */
  showValue?: boolean;
  id?: string;
}

export function Slider(props: SliderProps): JSX.Element;
