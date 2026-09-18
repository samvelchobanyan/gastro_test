export interface RatingReviewPromptProps {
  restaurantName?: string;
  rating?: number;
  onRatingChange?: (value: number) => void;
  review?: string;
  onReviewChange?: (value: string) => void;
  onSubmit?: () => void;
  onSkip?: () => void;
}

export function RatingReviewPrompt(props: RatingReviewPromptProps): JSX.Element;
