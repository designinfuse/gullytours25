export type TourCategory =
  | "Weekend Tours"
  | "Corporate Experiences"
  | "Educational Walks"
  | "Custom Walks";

export interface Tour {
  id: string;
  location: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  bgColor: string;
  category: TourCategory;
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
