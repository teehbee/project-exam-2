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
