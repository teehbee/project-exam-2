export interface bookingTileInterface {
  venue: VenueTileInterface;
}

interface VenueTileInterface {
  id: string;
  location: {
    city?: string;
    country?: string;
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

interface Media {
  url: string;
  alt: string;
}
