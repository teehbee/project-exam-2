import { venueHeroImageLarge, venueHeroImageSmall } from "../../assets/img";
import { SearchFormMain } from "../forms";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { VenueTile, VenueFiltering } from "./";
import { FrontPageLoader, FrontPageError } from "../frontpageContent";
import { VenueResponse } from "../api/interfaces";
import { VENUES_ENDPOINT } from "../api/const";
import { useApi } from "../api";
import MainLoader from "../loader";
import { SearchFormInputInterface } from "../api/const/interfaces";

const VenuesPage: React.FC = () => {
  const frontpageSearch = useSelector((state: RootState) => state.search.searchData);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    console.log("Search from redux:", frontpageSearch);
  }, [frontpageSearch]);

  const { data, error, loading } = useApi<null, VenueResponse>(VENUES_ENDPOINT, "GET", null, false, true);

  if (loading) return <FrontPageLoader />;
  if (error) return <FrontPageError />;

  const venues = data?.data || [];

  // Add 8 more venues to be displayed
  const loadMoreVenues = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  const searchHandler = (searchData: SearchFormInputInterface) => {
    console.log("Parent component received data", searchData);
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
      <section id="venues-list" className="container py-5 pt-md-0 my-5">
        <div className="py-3 py-lg-5">
          <p className="secondary-font fs-1rem-to-2rem mb-1">{venues.length > 0 ? `${venues.length} venues matches your search criteria` : "No venues match your search criteria"}</p>
          <p className="cursor-pointer fs-0-75rem-to-1rem">Show all venues</p>
          <VenueFiltering />
        </div>

        <div className="text-center py-5 d-none">
          <MainLoader />
        </div>
        <div className="row g-3">
          {venues.slice(0, visibleCount).map((venue, index) => (
            <VenueTile key={index} venue={venue} /> // Pass venue directly
          ))}
          {venues.length === 0 && <p>No upcoming bookings</p>}
        </div>
        <div className="text-center pt-5">
          <p className="secondary-font fs-1rem-to-1-25rem cursor-pointer" onClick={loadMoreVenues}>
            Load more venues...
          </p>
        </div>
      </section>
    </>
  );
};

export default VenuesPage;
