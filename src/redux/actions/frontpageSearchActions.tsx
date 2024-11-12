import { SearchFormInputFP } from "../../components/forms/SearchForm";

export const SET_FRONTPAGE_SEARCH_DATA = "SET_FRONTPAGE_SEARCH_DATA";

export const setFrontpageSearchData = (frontpageSearch: SearchFormInputFP) => ({
  type: SET_FRONTPAGE_SEARCH_DATA,
  payload: frontpageSearch,
});
