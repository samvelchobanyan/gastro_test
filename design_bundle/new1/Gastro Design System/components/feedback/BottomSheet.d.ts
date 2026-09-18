export interface BottomSheetProps {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
  /** Sticky footer (e.g. a confirm button). */
  footer?: React.ReactNode;
}

export function BottomSheet(props: BottomSheetProps): JSX.Element;
