export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export interface LoginAction {
  type: typeof LOGIN;
  payload: {
    token: string;
    name: string;
  };
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes = LoginAction | LogoutAction;
