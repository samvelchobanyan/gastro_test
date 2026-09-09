export interface MembershipTierPillProps {
  /** Tier label — default set is Regular / Advanced / Prime, brand-configurable. */
  membership?: string;
  /** Discount amount shown after a dot, e.g. "10%". Omit to hide. */
  discountLabel?: string | null;
}

export function MembershipTierPill(props: MembershipTierPillProps): JSX.Element;
