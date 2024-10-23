import { venueHeroImageLarge, venueHeroImageSmall } from "../assets/img";
import { SearchFormMain } from "../components/forms";

function Venues() {
  return (
    <>
      <picture>
        <source media="(min-width: 992px)" srcSet={venueHeroImageLarge} />
        <img className="position-absolute top-0 banner-img" src={venueHeroImageSmall} aria-label="A beautiful fjord" />
      </picture>
      <section className="hero-container">
        <div className="container test position-absolute start-50 top-50 translate-middle">
          <SearchFormMain />
        </div>
      </section>
    </>
  );
}

export default Venues;
