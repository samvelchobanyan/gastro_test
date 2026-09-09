export interface MapViewProps {
  height?: number;
  /** Caption chip anchored bottom (e.g. an address). */
  markerLabel?: string;
  /** Show a courier/motorcycle marker (live tracking). */
  showCourier?: boolean;
}

export function MapView(props: MapViewProps): JSX.Element;
