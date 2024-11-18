// authorization

export const LOGIN_ENDPOINT = "auth/login";
export const REGISTER_ENDPOINT = "auth/register";

// venues

export const VENUES_ENDPOINT = "holidaze/venues?_bookings=true&_owner=true&sort=created&sortOrder=desc";

// profile (dynamically adding name from localStorage)

export const getProfileEndpoint = (name: string): string => {
  return `holidaze/profiles/${name}?_bookings=true&_venues=true`;
};
