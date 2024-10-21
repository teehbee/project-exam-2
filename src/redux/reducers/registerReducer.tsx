import { SET_VENUE_MANAGER, RegisterActionTypes } from "../actions/registerActions";

interface RegisterState {
  isVenueManager: boolean;
}

const initialState: RegisterState = {
  isVenueManager: false,
};

const registerReducer = (state = initialState, action: RegisterActionTypes): RegisterState => {
  switch (action.type) {
    case SET_VENUE_MANAGER:
      return { ...state, isVenueManager: action.payload };
    default:
      return state;
  }
};

export default registerReducer;
