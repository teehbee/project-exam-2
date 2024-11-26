// Interfaces for venues

export interface Media {
  url: string;
  alt: string;
}

export interface Location {
  city?: string;
  country?: string;
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
  guests: number;
  rating: number;
  meta: Meta;
  location: Location;
  bookings: Bookings[];
}

export interface VenueResponse {
  data: Venue[];
  meta: {
    isFirstPage: boolean;
    isLastPage: boolean;
    currentPage: number;
    previousPage: number | null;
    nextPage: number | null;
  };
}

// Interface for registration form

export interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
}

// Interface for login form

interface UserData {
  accessToken: string;
  name: string;
  avatar?: { url: string; alt: string };
  banner?: { url: string; alt: string };
  bio?: string | null;
  email: string;
}

export interface LoginFormInputs {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: UserData;
}

// Interface for profile

export interface ProfileMedia {
  url: string;
  alt: string;
}

interface ProfileVenues {
  id: string;
  name: string;
  price: number;
  description: string;
  location: Location;
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
  media: Media[];
}
