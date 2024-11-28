import { Dispatch } from "redux";
import { VenueResponse } from "../api/interfaces";
import { clearFrontpageSearchData } from "../../redux/actions/frontpageRemoveSearchAction";
import { ConvertedSearchDataInterface } from "../api/const/interfaces";

// Function for clearing out search on venues page

export const deleteSearch = (setSearchData: React.Dispatch<React.SetStateAction<ConvertedSearchDataInterface | null>>, setFilteredVenues: React.Dispatch<React.SetStateAction<VenueResponse["data"]>>, venues: VenueResponse["data"], dispatch: Dispatch) => {
  setSearchData(null);
  setFilteredVenues(venues);
  dispatch(clearFrontpageSearchData());
};
