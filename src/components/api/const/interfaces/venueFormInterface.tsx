interface Location {
  city: string;
  country: string;
}

interface Media {
  url: string;
  alt: string;
}

export interface CreateVenueFormInputs {
  name: string;
  location: Location;
  media?: Media[];
  description: string;
  price: number;
  maxGuests: number;
  wifi?: boolean;
  parking?: boolean;
  breakfast?: boolean;
  pets?: boolean;
}
