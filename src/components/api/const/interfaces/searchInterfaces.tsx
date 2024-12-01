export interface SearchFormInputFP {
  location: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
}

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

export interface ConvertedSearchDataInterface {
  dateFrom?: string | undefined;
  dateTo?: string | undefined;
  location?: string;
  name?: string;
  guests?: number;
}

export interface SearchFormMainProps {
  onSearch: (data: ConvertedSearchDataInterface) => void;
}

export interface SearchFormInputInterface {
  location?: string;
  name?: string;
  dateFrom?: Date;
  dateTo?: Date;
  guests?: number;
}
