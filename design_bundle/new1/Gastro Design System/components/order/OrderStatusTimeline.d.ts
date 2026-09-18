export interface TimelineStep {
  label: string;
  time?: string;
  /** Phosphor icon name shown inside the step dot. */
  icon?: string;
}

export interface OrderStatusTimelineProps {
  steps?: TimelineStep[];
  /** Index of the current (in-progress) step; earlier steps show completed. */
  currentIndex?: number;
}

export function OrderStatusTimeline(props: OrderStatusTimelineProps): JSX.Element;
