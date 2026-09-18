export interface CalendarValue {
  /** Selected date, ISO `YYYY-MM-DD`. */
  date: string | null;
  /** Selected time, `HH:mm`. */
  time: string | null;
}

export interface CalendarTimeSlot {
  time: string;
  disabled?: boolean;
}

export interface CalendarProps {
  /** Combined date + time selection. */
  value?: CalendarValue;
  onChange?: (value: CalendarValue) => void;
  /** Time options — plain `HH:mm` strings or `{ time, disabled }`. */
  timeSlots?: Array<CalendarTimeSlot | string>;
  /** Earliest selectable date, ISO `YYYY-MM-DD`. Defaults to today. */
  minDate?: string;
}

export function Calendar(props: CalendarProps): JSX.Element;
