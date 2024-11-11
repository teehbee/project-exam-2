import { SET_FRONTPAGE_SEARCH_DATA } from "../actions/frontpageSearchActions";
import { SearchFormInputFP } from "../../components/forms/SearchForm";

// Reducer for saving search data from frontpage

interface SearchState {
  searchData: SearchFormInputFP | null;
}

const initialState: SearchState = {
  searchData: null,
};

const frontpageSearchReducer = (state: SearchState = initialState, action: any): SearchState => {
  switch (action.type) {
    case SET_FRONTPAGE_SEARCH_DATA:
      return {
        ...state,
        searchData: action.payload, // Update the search data with the payload
      };
    default:
      return state; // Return the current state if no action matches
  }
};

export default frontpageSearchReducer;
