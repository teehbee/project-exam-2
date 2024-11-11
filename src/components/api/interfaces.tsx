// Interfaces for venues

export interface Media {
  url: string;
  alt: string;
}

export interface Location {
  city: string;
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
  rating: number;
  meta: Meta;
  location: Location;
  bookings: Bookings[];
}
