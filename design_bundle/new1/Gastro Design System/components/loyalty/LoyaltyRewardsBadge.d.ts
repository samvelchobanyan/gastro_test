export interface LoyaltyRewardsBadgeProps {
  points?: number;
  /** e.g. "Gold". */
  tier?: string;
  /** 0–1 progress ring to next tier/reward. */
  progress?: number;
  onClick?: () => void;
}

export function LoyaltyRewardsBadge(props: LoyaltyRewardsBadgeProps): JSX.Element;
