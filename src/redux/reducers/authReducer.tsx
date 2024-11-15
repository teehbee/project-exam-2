// import { LOGIN, LOGOUT, AuthActionTypes } from "../types/authActionTypes";

// interface AuthState {
//   token: string | null;
//   name: string | null;
//   loggedIn: boolean;
// }

// const initialState: AuthState = {
//   token: null,
//   name: null,
//   loggedIn: false,
// };

// const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
//   switch (action.type) {
//     case LOGIN:
//       return {
//         ...state,
//         token: action.payload.token,
//         name: action.payload.name,
//         loggedIn: true,
//       };
//     case LOGOUT:
//       return initialState;
//     default:
//       return state;
//   }
// };

// export default authReducer;
