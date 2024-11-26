export interface SingleVenueResponse {
  data: SingleVenueResponseContent;
}

export interface SingleVenueProp {
  venue: SingleVenueResponse;
}

export interface VenueInterface {
  venue: SingleVenueResponseContent;
}

interface Customer {
  name: string;
  email: string;
}

interface Media {
  url: string;
  alt: string;
}

interface Bookings {
  customer: Customer;
  dateFrom: string;
  dateTo: string;
  guests: number;
}

export interface SingleVenueResponseContent {
  bookings: Bookings[];
  description: string;

  id: string;
  location: {
    address: string;
    city: string;
    zip: string;
    country: string;
    continent: string;
  };
  maxGuests: number;
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
}

export interface BookingCalendarProps {
  onDateChange: (fromDate: string | null, toDate: string | null) => void;
  venue: SingleVenueResponse;
}
