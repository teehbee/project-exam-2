interface Location {
  city?: string;
  country?: string;
}

export interface Bookings {
  fromDate: string;
  toDate: string;
  id: string;
}

interface Meta {
  wifi: boolean;
  breakfast: boolean;
  parking: boolean;
  pets: boolean;
}

interface Media {
  url: string;
  alt: string;
}

export interface SearchReturnInterface {
  name: string;
  location: Location;
  maxGuests: number;
  id: string;
  description: string;
  price: number;
  rating: number;
  bookings: Bookings[];
  guests: number;
  meta: Meta;
  media: Media[];
}
