import { FrontpageTiles, FrontpageVenuePreview } from "./index";
import { frontpageHeroImageLarge, frontpageHeroImageSmall } from "../../assets/img";
import { SearchForm } from "../forms";

function Frontpage() {
  return (
    <>
      <picture>
        <source media="(min-width: 992px)" srcSet={frontpageHeroImageLarge} width="1920" height="920" />
        <img className="position-absolute top-0 banner-img" src={frontpageHeroImageSmall} aria-label="A beautiful fjord" width="992" height="950" />
      </picture>
      <section className="hero-container position-relative d-flex justify-content-center align-items-center">
        <div className="container mt-5 pt-5">
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

export default Frontpage;
