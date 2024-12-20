import { Dispatch } from "redux";
import { VenueResponse, ConvertedSearchDataInterface } from "../../api/const/interfaces";
import { clearFrontpageSearchData } from "../../../redux/actions/frontpageRemoveSearchAction";

// Function for clearing out search on venues page, also delete frontpage search received from redux

export const deleteSearch = (setSearchData: React.Dispatch<React.SetStateAction<ConvertedSearchDataInterface | null>>, setFilteredVenues: React.Dispatch<React.SetStateAction<VenueResponse["data"]>>, venues: VenueResponse["data"], dispatch: Dispatch) => {
  setSearchData(null);
  setFilteredVenues(venues);
  dispatch(clearFrontpageSearchData());
};
