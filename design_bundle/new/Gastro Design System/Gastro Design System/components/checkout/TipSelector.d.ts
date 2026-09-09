export interface TipSelectorProps {
  /** Order subtotal used to compute each preset's dollar amount. */
  subtotal?: number;
  /** Preset percentages. Default [10, 15, 20]. */
  presets?: number[];
  /** Selected percentage; 0 = "No tip". */
  value?: number;
  onChange?: (percent: number) => void;
  /** Show a "Custom amount" text action. Default true. */
  allowCustom?: boolean;
}

export function TipSelector(props: TipSelectorProps): JSX.Element;
