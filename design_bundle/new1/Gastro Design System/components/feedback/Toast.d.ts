export interface ToastProps {
  open?: boolean;
  message?: string;
  tone?: 'default' | 'success' | 'error';
  /** Optional single action (e.g. "Undo"). */
  actionLabel?: string;
  onAction?: () => void;
  /** When set, shows a dismiss (x). */
  onDismiss?: () => void;
}

export function Toast(props: ToastProps): JSX.Element;
