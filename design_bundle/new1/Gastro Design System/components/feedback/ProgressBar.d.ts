export interface ProgressBarProps {
  /** 0–100. Ignored when `indeterminate`. */
  value?: number;
  indeterminate?: boolean;
  label?: string;
  showValue?: boolean;
  tone?: 'brand' | 'success';
}

export function ProgressBar(props: ProgressBarProps): JSX.Element;
