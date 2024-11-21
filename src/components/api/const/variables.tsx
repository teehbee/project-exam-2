// authorization

export const LOGIN_ENDPOINT = "auth/login";
export const REGISTER_ENDPOINT = "auth/register";

// venues

export const VENUES_ENDPOINT = "holidaze/venues?_bookings=true&_owner=true&sort=created";

// single venue

export const getVenueEndpoint = (id: string) => `holidaze/venues/${id}?_bookings=true`;

// profile (dynamically adding name from localStorage)

export const getProfileEndpoint = (name: string): string => {
  return `holidaze/profiles/${name}?_bookings=true&_venues=true`;
};

// booking

export const BOOK_VENUE_ENDPOINT = "holidaze/bookings";
