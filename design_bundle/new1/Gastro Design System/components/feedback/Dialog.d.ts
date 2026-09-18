export interface DialogProps {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  description?: string;
  /** Optional Phosphor icon in a tinted circle. */
  icon?: string;
  /** `destructive` recolors the icon + confirm button red. */
  tone?: 'default' | 'destructive';
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  children?: React.ReactNode;
}

export function Dialog(props: DialogProps): JSX.Element;
