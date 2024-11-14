import { venueHeroImageLarge, venueHeroImageSmall } from "../../assets/img";
import { SearchFormMain } from "../forms";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { VenueTile, VenueFiltering } from "./";
import { FrontPageLoader, FrontPageError } from "../frontpageContent";
import { VenueResponse } from "../api/interfaces";
import { VENUES_ENDPOINT } from "../api/const";
import { useApi } from "../api";
import MainLoader from "../loader";

const VenuesPage: React.FC = () => {
  const searchData = useSelector((state: RootState) => state.search.searchData);

  useEffect(() => {
    // Log the search data to the console
    console.log("Search Data from frontpage search:", searchData);
  }, [searchData]);

  const { data, error, loading } = useApi<null, VenueResponse>(VENUES_ENDPOINT, "GET", null, false);

  console.log("Fetched Data:", data);

  if (loading) return <FrontPageLoader />;
  if (error) return <FrontPageError />;

  const venues = data?.data || [];

  console.log(venues);

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
          <VenueTile />
          <VenueTile />
          <VenueTile />
          <VenueTile />
          <VenueTile />
          <VenueTile />
          <VenueTile />
          <VenueTile />
        </div>
        <div className="text-center pt-5">
          <p className="secondary-font fs-1rem-to-1-25rem cursor-pointer">Load more venues...</p>
        </div>
      </section>
    </>
  );
};

export default VenuesPage;
