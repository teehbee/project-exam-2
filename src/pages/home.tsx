import { FrontpageTiles, FrontpageVenuePreview } from "../components/frontpageContent";
import { frontpageHeroImageSmall, frontpageHeroImageLarge } from "../assets/img";
import { SearchForm } from "../components/forms";
import { useScrollToTop } from "../components/utils";

function Home() {
  useScrollToTop();

  return (
    <>
      <picture>
        <source media="(min-width: 992px)" srcSet={frontpageHeroImageLarge} />
        <img className="position-absolute top-0 banner-img" src={frontpageHeroImageSmall} aria-label="A beautiful fjord" />
      </picture>
      <section className="hero-container">
        <div className="container test position-absolute start-50 top-50 translate-middle">
          <div className="row">
            <div className="col-10 col-lg-6 mx-auto text-center text-lg-start">
              <h1 className="text-light secondary-font fs-2rem-to-3rem pt-md-5 mt-md-5 pb-3 pe-lg-5">Spend Quality Holidays With Us</h1>
              <p className="text-light fs-1rem-to-1-25rem d-none d-lg-block">Find your perfect getaway with our diverse accommodations. Whether for relaxation or celebration, we offer spaces that feel like home. Start creating unforgettable moments today!</p>
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
