import { FrontpageTiles, FrontpageVenuePreview } from "../components/frontpageContent";
import { frontpageHeroImageSmall, frontpageHeroImageLarge } from "../assets/img";
import SearchForm from "../components/forms";

function Home() {
  return (
    <>
      <picture>
        <source media="(min-width: 992px)" srcSet={frontpageHeroImageLarge} />
        <img className="position-absolute top-0 banner-img" src={frontpageHeroImageSmall} aria-label="A beautiful fjord" />
      </picture>
      <section className="hero-container d-flex align-items-center justify-content-center position-relative">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h1 className="text-light secondary-font fs-2rem-to-3rem pt-lg-5 pe-md-5">Spend Quality Holidays With Us</h1>
              <p className="text-light fs-1rem-to-1-25rem">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            </div>
            <div className="col-12 col-lg-6">
              <SearchForm />
            </div>
          </div>
        </div>
      </section>
      <FrontpageVenuePreview />
      <FrontpageTiles />
    </>
  );
}

export default Home;
