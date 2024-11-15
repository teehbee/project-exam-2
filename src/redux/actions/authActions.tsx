import { LOGIN, LOGOUT } from "../types/authActionTypes";

export const login = (token: string, name: string) => ({
  type: LOGIN,
  payload: { token, name },
});

export const logout = () => ({
  type: LOGOUT,
});
