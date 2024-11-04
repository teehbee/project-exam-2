import { venueHeroImageLarge, venueHeroImageSmall } from "../assets/img";
import { SearchFormMain } from "../components/forms";
import VenueTile from "../components/venues";
import { useScrollToTop } from "../components/utils";

function Venues() {
  useScrollToTop();
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
      <section id="venues-list" className="container pt-5 pt-md-0 my-5">
        <p className="secondary-font fs-1rem-to-2rem">0 venues match your search</p>
        <p className="cursor-pointer fs-0-75rem-to-1rem">Show all venues</p>
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
      </section>
    </>
  );
}

export default Venues;
