import { ConvertedSearchDataInterface, FilterValues } from "../../api/const/interfaces";
import { Dispatch } from "redux";
import { clearFrontpageSearchData } from "../../../redux/actions/frontpageRemoveSearchAction";
import { VenueResponse } from "../../api/const/interfaces";
import { filterVenues } from "./filterVenues";

// Search handler function for venue search

export const searchHandler = (searchData: ConvertedSearchDataInterface, setSearchData: React.Dispatch<React.SetStateAction<ConvertedSearchDataInterface | null>>, setFilteredVenues: React.Dispatch<React.SetStateAction<VenueResponse["data"]>>, venues: VenueResponse["data"], filterValues: FilterValues, venuesListRef: React.RefObject<HTMLDivElement>, dispatch: Dispatch) => {
  setSearchData(searchData);
  const filtered = filterVenues(venues, searchData, filterValues);
  setFilteredVenues(filtered);
  if (venuesListRef.current) {
    venuesListRef.current.scrollIntoView({ behavior: "smooth" });
  }
  dispatch(clearFrontpageSearchData());
};
