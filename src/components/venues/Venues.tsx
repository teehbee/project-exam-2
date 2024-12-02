import { venueHeroImageLarge, venueHeroImageSmall } from "../../assets/img";
import { SearchFormMain } from "../forms";
import { useEffect, useState, useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { VenueTile, VenueFiltering } from "./";
import { FrontPageLoader, FrontPageError } from "../frontpageContent";
import { VenueResponse } from "../api/const/interfaces";
import { VENUES_ENDPOINT } from "../api/const";
import { useApi } from "../api";
import MainLoader from "../loader";
import { ConvertedSearchDataInterface, FilterValues } from "../api/const/interfaces";
import { filterVenues, deleteSearch, searchHandler, handleFilterChange, loadMoreVenues } from "../utils";

const VenuesPage: React.FC = () => {
  const dispatch = useDispatch();
  const frontpageSearch = useSelector((state: RootState) => state.search.searchData);
  // State for visible venues, set to default 8 or fetched from localStorage
  const [visibleCount, setVisibleCount] = useState(() => {
    const savedVisibleCount = localStorage.getItem("visibleCount");
    return savedVisibleCount ? parseInt(savedVisibleCount, 10) : 8;
  });
  const [searchData, setSearchData] = useState<ConvertedSearchDataInterface | null>(null);
  // State for filtered venues, fetched from localStorage if user navigated away from page
  const [filteredVenues, setFilteredVenues] = useState<VenueResponse["data"]>(() => {
    const savedFilteredVenues = localStorage.getItem("filteredVenues");
    return savedFilteredVenues ? JSON.parse(savedFilteredVenues) : [];
  });
  const [filterValues, setFilterValues] = useState<FilterValues>({
    wifi: false,
    breakfast: false,
    parking: false,
    pets: false,
  });
  const venuesListRef = useRef<HTMLDivElement>(null);

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

  // Logic for saving scroll position and visible venue listings

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("visibleCount", visibleCount.toString());
      localStorage.setItem("filteredVenues", JSON.stringify(filteredVenues));
      localStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [visibleCount, filteredVenues]);

  // Set scroll position after navigating away from page
  useEffect(() => {
    const savedScrollPosition = localStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
  }, []);

  console.log("filtered venues is", filteredVenues);

  if (loading) return <FrontPageLoader />;
  if (error) return <FrontPageError />;

  return (
    <>
      <picture>
        <source media="(min-width: 992px)" srcSet={venueHeroImageLarge} />
        <img className="position-absolute top-0 banner-img" src={venueHeroImageSmall} aria-label="A beautiful fjord" />
      </picture>
      <section className="hero-container position-relative d-flex justify-content-center align-items-center">
        <div className="container ">
          <SearchFormMain onSearch={(searchData) => searchHandler(searchData, setSearchData, setFilteredVenues, venues, filterValues, venuesListRef, dispatch)} />
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
          <VenueFiltering filterValues={filterValues} onFilterChange={(updatedValues) => handleFilterChange(updatedValues, setFilterValues)} />
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
            <p className="secondary-font fs-1rem-to-1-25rem cursor-pointer link-hover-md" onClick={() => loadMoreVenues(setVisibleCount)}>
              Load more venues...
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default VenuesPage;
