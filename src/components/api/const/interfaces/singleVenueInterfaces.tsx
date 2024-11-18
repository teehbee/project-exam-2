export interface SingleVenueResponse {
  data: SingleVenueResponseContent;
}

export interface SingleVenueResponseData {
  venue: SingleVenueResponseContent;
}

export interface SingleVenueProp {
  venue: SingleVenueResponse;
}

interface Media {
  url: string;
  alt: string;
}

export interface SingleVenueResponseContent {
  created: string;
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
  updated: string;
  _count: {
    bookings: number;
  };
}
