import { combineReducers } from "@reduxjs/toolkit";
import registerReducer from "./registerReducer";
import frontpageSearchReducer from "./frontpageSearchReducer";

const rootReducer = combineReducers({
  register: registerReducer,
  search: frontpageSearchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
