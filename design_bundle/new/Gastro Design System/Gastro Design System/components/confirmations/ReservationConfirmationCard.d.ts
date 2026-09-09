export interface ReservationConfirmationCardProps {
  restaurantName?: string;
  dateLabel?: string;
  timeLabel?: string;
  partySize?: number;
  confirmationCode?: string;
}

export function ReservationConfirmationCard(props: ReservationConfirmationCardProps): JSX.Element;
