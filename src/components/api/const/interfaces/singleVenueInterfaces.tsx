export interface SingleVenueResponse {
  data: SingleVenueResponseContent;
}

export interface SingleVenueProp {
  venue: SingleVenueResponse;
}

interface Media {
  url: string;
  alt: string;
}

interface Customer {
  name: string;
  email: string;
}

interface Bookings {
  [x: string]: ReactNode;
  customer: Customer;
  dateFrom: string;
  dateTo: string;
}

export interface SingleVenueResponseContent {
  created: string;
  description: string;
  bookings: Bookings[];
  id: string;
  location: {
    address: string;
    city: string;
    zip: string;
    country: string;
    continent: string;
  };
  maxGuests: number;
  guests: number;
  media: Media[];
  meta: {
    wifi: boolean;
    parking: boolean;
    breakfast: boolean;
    pets: boolean;
  };
  name: string;
  price: number;
  rating: number;
  updated: string;
  _count: {
    bookings: number;
  };
}
