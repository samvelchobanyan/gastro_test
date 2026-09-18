export interface StatusPillProps {
  /** Pill label, e.g. "Open" / "Closed". */
  children?: React.ReactNode;
  /** Tonal color. Default "success". */
  tone?: 'success' | 'error' | 'warning' | 'neutral';
}

export function StatusPill(props: StatusPillProps): JSX.Element;
