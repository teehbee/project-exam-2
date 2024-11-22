export interface CreateVenueFormInputs {
  name: string;
  city: string;
  country: string;
  description: string;
  url: string;
  alt?: string;
  price: number;
  maxGuests: number;
  wifi?: boolean;
  parking?: boolean;
  breakfast?: boolean;
  pets?: boolean;
}
