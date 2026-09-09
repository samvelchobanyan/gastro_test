export interface TooltipProps {
  /** Hint text. */
  content?: string;
  placement?: 'top' | 'bottom';
  /** The trigger element the tooltip is anchored to. */
  children?: React.ReactNode;
}

export function Tooltip(props: TooltipProps): JSX.Element;
