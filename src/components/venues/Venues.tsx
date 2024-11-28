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
import { ConvertedSearchDataInterface, SearchReturnInterface } from "../api/const/interfaces";

// Reusable filtering function for venues

const filterVenues = (venues: SearchReturnInterface[], searchData: ConvertedSearchDataInterface) => {
  return venues.filter((venue) => {
    const matchesLocation = !searchData.location || (venue.location && ((venue.location.city && venue.location.city.includes(searchData.location)) || (venue.location.country && venue.location.country.includes(searchData.location))));
    const matchesName = !searchData.name || venue.name.toLowerCase().includes(searchData.name.toLowerCase());
    const matchesGuests = !searchData.guests || searchData.guests <= venue.maxGuests;
    return matchesLocation && matchesName && matchesGuests;
  });
};

const VenuesPage: React.FC = () => {
  const frontpageSearch = useSelector((state: RootState) => state.search.searchData);
  const [visibleCount, setVisibleCount] = useState(8);
  const [filteredVenues, setFilteredVenues] = useState<VenueResponse["data"]>([]);

  // Ref to venues-list section of component for scrolling with search is executed.

  const venuesListRef = useRef<HTMLDivElement>(null);

  // Api call for venues

  const { data, error, loading } = useApi<null, VenueResponse>(VENUES_ENDPOINT, "GET", null, false, true);

  // Making sure that venues is only re-evaluated when the data changes

  const venues = useMemo(() => data?.data || [], [data]);

  // Logic to automate search if frontPageSearch is present from redux, if not, display all venues

  useEffect(() => {
    if (venues) {
      if (frontpageSearch) {
        const filtered = filterVenues(venues, frontpageSearch);
        setFilteredVenues(filtered);
      } else {
        setFilteredVenues(venues);
      }
    }
  }, [venues, frontpageSearch]);

  if (loading) return <FrontPageLoader />;
  if (error) return <FrontPageError />;

  // Add 8 more venues to be displayed
  const loadMoreVenues = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  const searchHandler = (searchData: ConvertedSearchDataInterface) => {
    console.log(searchData);
    const filtered = filterVenues(venues, searchData);
    setFilteredVenues(filtered);
    if (venuesListRef.current) {
      venuesListRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
          <p className="secondary-font fs-1rem-to-2rem mb-1">{filteredVenues.length > 0 ? `${filteredVenues.length} venues matches your search criteria` : "No venues match your search criteria"}</p>
          <p className="cursor-pointer fs-0-75rem-to-1rem">Show all venues</p>
          <VenueFiltering />
        </div>

        <div className="text-center py-5 d-none">
          <MainLoader />
        </div>
        <div className="row g-3">
          {filteredVenues.slice(0, visibleCount).map((venue, index) => (
            <VenueTile key={index} venue={venue} /> // Pass venue directly
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
