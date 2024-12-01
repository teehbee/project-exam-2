// Interfaces for venues

export interface Media {
  url: string;
  alt: string;
}

export interface Meta {
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  pets: boolean;
}

export interface Bookings {
  id: string;
  fromDate: string;
  toDate: string;
}

export interface Venue {
  id: string;
  name: string;
  description: string;
  media: Media[];
  price: number;
  maxGuests: number;
  guests: number;
  rating: number;
  meta: Meta;
  location: {
    city?: string;
    country?: string;
  };
  bookings: Bookings[];
}

export interface VenueResponse {
  data: Venue[];
  meta: {
    isFirstPage: boolean;
    isLastPage: boolean;
    currentPage: number;
    previousPage: number | null;
    nextPage: number | null;
  };
}
