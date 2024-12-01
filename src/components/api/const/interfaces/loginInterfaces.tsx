interface UserData {
  accessToken: string;
  name: string;
  avatar?: { url: string; alt: string };
  banner?: { url: string; alt: string };
  bio?: string | null;
  email: string;
  venueManager: boolean;
}

export interface LoginFormInputs {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: UserData;
}
