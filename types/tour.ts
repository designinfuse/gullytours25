export type TourCategory =
  | "Weekend Tours"
  | "Corporate Experiences"
  | "Educational Walks"
  | "Custom Walks";

// Consistent colors for tour categories across the app
export const tourCategoryColors: Record<TourCategory, string> = {
  "Weekend Tours": "#46869F",
  "Corporate Experiences": "#B23F27",
  "Educational Walks": "#DE6D11",
  "Custom Walks": "#4F8C7D",
};

export interface Tour {
  id: string;
  location: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  bgColor: string;
  category: TourCategory;
  when?: string; // ISO date string for upcoming tours
  buttonLabel?: string;
}

export interface CalendarEvent {
  summary: string;
  start: {
    dateTime: string;
  };
  end?: {
    dateTime: string;
  };
}

export interface ApiTour {
  _id: string;
  tour_name: string;
  place: string;
  description: string;
  duration: string;
  price: number;
  activity?: string;
  image?: string;
  highlights?: string[] | ApiHighlight;
  itinerary?: string;
  inclusions?: string[];
  booking_url?: string;
}

export interface ApiHighlight {
  items: string[];
}

export interface ApiResponse {
  docs: ApiTour[];
  bookmark?: string;
}
