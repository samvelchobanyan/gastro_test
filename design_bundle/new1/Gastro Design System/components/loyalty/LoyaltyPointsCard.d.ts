export interface LoyaltyPointsCardProps {
  /** Points balance shown in the H1 slot. */
  points?: number;
  /** Membership tier label. Brand-configurable. */
  membership?: string;
  /** Discount shown after a dot in the tier pill, e.g. "10%". */
  discountLabel?: string | null;
  /** Data encoded in the QR; drives the module pattern. */
  qrValue?: string;
  /** Per-brand background image URL, sized 328×116. Placeholder when null. */
  backgroundImage?: string | null;
}

export function LoyaltyPointsCard(props: LoyaltyPointsCardProps): JSX.Element;
