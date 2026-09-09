export interface LiveOrderTrackingMapProps {
  /** e.g. "12 min" — rendered as "Arriving in 12 min". */
  eta?: string;
  height?: number;
}

export function LiveOrderTrackingMap(props: LiveOrderTrackingMapProps): JSX.Element;
