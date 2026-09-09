export interface WalletProps {
  /** Balance value shown in Heading 1 (pre-formatted string). */
  balance?: string;
  /** Title above the balance. Default "Wallet". */
  title?: string;
  /** Top-up button label. Default "Top Up". */
  topUpLabel?: string;
  onTopUp?: () => void;
  /** Action button label. Default "Top Up". */
  buttonLabel?: string;
  onTopUp?: () => void;
  /** Per-client 48×48 icon image URL shown left of the title. Placeholder when null. */
  icon?: string | null;
}

export function Wallet(props: WalletProps): JSX.Element;
