import { venueHeroImageLarge, venueHeroImageSmall } from "../../assets/img";
import { SearchFormMain } from "../forms";
import { useEffect, useState, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { VenueTile, VenueFiltering } from "./";
import { FrontPageLoader, FrontPageError } from "../frontpageContent";
import { VenueResponse } from "../api/interfaces";
import { VENUES_ENDPOINT } from "../api/const";
import { useApi } from "../api";
import MainLoader from "../loader";
import { ConvertedSearchDataInterface } from "../api/const/interfaces";
import { clearFrontpageSearchData } from "../../redux/actions/frontpageRemoveSearchAction";
import { useDispatch } from "react-redux";
import { FilterValues } from "../api/const/interfaces";
import { filterVenues } from "../utils";
import { deleteSearch } from "../utils/deleteSearch";

// Reusable filtering function for venues

const VenuesPage: React.FC = () => {
  const dispatch = useDispatch();
  // Fetch search data from frontpage
  const frontpageSearch = useSelector((state: RootState) => state.search.searchData);
  // State for storing number of visible venues on page
  const [visibleCount, setVisibleCount] = useState(8);
  // State for storing search data including facilities
  const [searchData, setSearchData] = useState<ConvertedSearchDataInterface | null>(null);
  // State for storing filtered venues
  const [filteredVenues, setFilteredVenues] = useState<VenueResponse["data"]>([]);
  // State for storing facility filtering
  const [filterValues, setFilterValues] = useState<FilterValues>({
    wifi: false,
    breakfast: false,
    parking: false,
    pets: false,
  });
  // Ref to venues-list section of component for scrolling with search is executed.
  const venuesListRef = useRef<HTMLDivElement>(null);

  // Api call for venues
  const { data, error, loading } = useApi<null, VenueResponse>(VENUES_ENDPOINT, "GET", null, false, true);

  // Making sure that venues is only re-evaluated when the data changes
  const venues = useMemo(() => data?.data || [], [data]);

  // Logic to automate search if frontPageSearch is present from redux, if not, display all venues
  useEffect(() => {
    if (venues) {
      const currentSearchData = searchData || frontpageSearch || {};
      const filtered = filterVenues(venues, currentSearchData, filterValues);
      setFilteredVenues(filtered);
    }
  }, [venues, frontpageSearch, filterValues, searchData]);

  if (loading) return <FrontPageLoader />;
  if (error) return <FrontPageError />;

  // Add 8 more venues to be displayed
  const loadMoreVenues = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  const searchHandler = (searchData: ConvertedSearchDataInterface) => {
    setSearchData(searchData);
    const filtered = filterVenues(venues, searchData, filterValues);
    setFilteredVenues(filtered);
    if (venuesListRef.current) {
      venuesListRef.current.scrollIntoView({ behavior: "smooth" });
    }
    dispatch(clearFrontpageSearchData());
  };

  const handleFilterChange = (updatedValues: FilterValues) => {
    setFilterValues(updatedValues);
  };

  return (
    <>
      <picture>
        <source media="(min-width: 992px)" srcSet={venueHeroImageLarge} />
        <img className="position-absolute top-0 banner-img" src={venueHeroImageSmall} aria-label="A beautiful fjord" />
      </picture>
      <section className="hero-container position-relative d-flex justify-content-center align-items-center">
        <div className="container ">
          <SearchFormMain onSearch={searchHandler} />
        </div>
      </section>
      <section id="venues-list" ref={venuesListRef} className="container py-5 pt-md-0 my-5">
        <div className="py-3 py-lg-5">
          <p className="secondary-font fs-1rem-to-2rem mb-1">{filteredVenues.length > 0 ? `${filteredVenues.length} venues match your search criteria` : "No venues match your search criteria"}</p>
          {filteredVenues.length < venues.length && (
            <p className="cursor-pointer fs-0-75rem-to-1rem" onClick={() => deleteSearch(setSearchData, setFilteredVenues, venues, dispatch)}>
              Show all venues
            </p>
          )}
          <VenueFiltering filterValues={filterValues} onFilterChange={handleFilterChange} />
        </div>

        <div className="text-center py-5 d-none">
          <MainLoader />
        </div>
        <div className="row g-3">
          {filteredVenues.slice(0, visibleCount).map((venue, index) => (
            <VenueTile key={index} venue={venue} />
          ))}
          {filteredVenues.length === 0 && <p>No upcoming bookings</p>}
        </div>
        {visibleCount < filteredVenues.length && (
          <div className="text-center pt-5">
            <p className="secondary-font fs-1rem-to-1-25rem cursor-pointer" onClick={loadMoreVenues}>
              Load more venues...
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default VenuesPage;
