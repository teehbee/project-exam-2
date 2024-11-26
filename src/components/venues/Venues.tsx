import { venueHeroImageLarge, venueHeroImageSmall } from "../../assets/img";
import { SearchFormMain } from "../forms";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { VenueTile, VenueFiltering } from "./";
import { FrontPageLoader, FrontPageError } from "../frontpageContent";
import { VenueInterface } from "../api/const/interfaces";
import { VENUES_ENDPOINT } from "../api/const";
import { useApi } from "../api";
import MainLoader from "../loader";

const VenuesPage: React.FC = () => {
  const frontpageSearch = useSelector((state: RootState) => state.search.searchData);
  console.log(frontpageSearch);
  const [visibleCount, setVisibleCount] = useState(() => {
    const savedCount = localStorage.getItem("visibleCount");
    return savedCount ? parseInt(savedCount) : 8; // Default to 8 if not found
  });
  const [venues, setVenues] = useState<VenueInterface[]>([]);

  useEffect(() => {
    const savedVenues = localStorage.getItem("venues");
    if (savedVenues) {
      setVenues(JSON.parse(savedVenues));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("visibleCount", visibleCount.toString());
    localStorage.setItem("venues", JSON.stringify(venues));
  }, [visibleCount, venues]);

  const { data, error, loading } = useApi<null, VenueInterface>(VENUES_ENDPOINT, "GET", null, false, true);

  useEffect(() => {
    if (data) {
      setVenues(venues);
    }
  }, [venues, data]);

  console.log("venues is", venues);

  if (loading) return <FrontPageLoader />;
  if (error) return <FrontPageError />;

  const loadMoreVenues = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <>
      <picture>
        <source media="(min-width: 992px)" srcSet={venueHeroImageLarge} />
        <img className="position-absolute top-0 banner-img" src={venueHeroImageSmall} aria-label="A beautiful fjord" />
      </picture>
      <section className="hero-container position-relative d-flex justify-content-center align-items-center">
        <div className="container ">
          <SearchFormMain />
        </div>
      </section>
      <section id="venues-list" className="container py-5 pt-md-0 my-5">
        <div className="py-3 py-lg-5">
          <p className="secondary-font fs-1rem-to-2rem mb-1">0 venues match your search</p>
          <p className="cursor-pointer fs-0-75rem-to-1rem">Show all venues</p>
          <VenueFiltering />
        </div>

        <div className="text-center py-5 d-none">
          <MainLoader />
        </div>
        <div className="row g-3">
          {venues.slice(0, visibleCount).map((venue, index) => (
            <VenueTile key={index} venue={venue} />
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
