import { venueHeroImageLarge, venueHeroImageSmall } from "../assets/img";
import { SearchFormMain } from "../components/forms";
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
    </>
  );
}

export default Venues;
