import { combineReducers } from "@reduxjs/toolkit";
import registerReducer from "./registerReducer";
import frontpageSearchReducer from "./frontpageSearchReducer";
// import authReducer from "./authReducer";

const rootReducer = combineReducers({
  register: registerReducer,
  search: frontpageSearchReducer,
  // auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
