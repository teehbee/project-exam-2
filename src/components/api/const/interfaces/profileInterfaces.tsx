export interface ProfileMedia {
  url: string;
  alt: string;
}

interface ProfileVenues {
  id: string;
  name: string;
  price: number;
  description: string;
  location?: {
    city: string;
    country: string;
  };
  media: ProfileMedia[];
}

export interface ProfileBookings {
  id: string;
  name: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  venue: ProfileVenues;
  location?: {
    city: string;
    country: string;
  };
}

export interface ProfileContent {
  name: string;
  email: string;
  bio: string;
  avatar: ProfileMedia;
  venueManager: boolean;
  venues: ProfileVenues[];
  bookings: ProfileBookings[];
  location?: {
    city?: string;
    country?: string;
  };
}

export interface ProfileBioText {
  bio: string;
  name: string;
}

export interface ProfileData {
  data: ProfileContent;
}

export interface VenueManagerBookings {
  name: string;
  id: string;
  media: ProfileMedia[];
}

export interface VenueManagerBookingsData {
  venue: VenueManagerBookings;
}

export interface UpdateProfileInterface {
  url?: string;
  bio?: string;
  venueManager?: boolean;
}

export type UpdatedProfileData = {
  avatar?: { url: string };
  bio?: string;
  venueManager?: boolean;
};
