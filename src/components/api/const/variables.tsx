// authorization (POST)

export const LOGIN_ENDPOINT = "auth/login";
export const REGISTER_ENDPOINT = "auth/register";

// venues (GET)

export const VENUES_ENDPOINT = "holidaze/venues?_bookings=true&_owner=true&sort=created";

// single venue (GET)

export const getVenueEndpoint = (id: string) => `holidaze/venues/${id}?_bookings=true`;

// create venue (POST)

export const CREATE_VENUE_ENDPOINT = "holidaze/venues";

// profile (dynamically adding name from localStorage)

export const getProfileEndpoint = (name: string): string => {
  return `holidaze/profiles/${name}?_bookings=true&_venues=true`;
};

// booking (POST)

export const BOOK_VENUE_ENDPOINT = "holidaze/bookings";
