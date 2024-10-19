import { Link } from "react-router-dom";
import FrontpageTiles from "../components/frontpageContent/FrontpageTiles";
import { frontpageHeroImageSmall, frontpageHeroImageLarge } from "../assets/img";
import placeHolderImage from "../assets/placeholderImg";
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
              <h1 className="text-light secondary-font fs-2rem-to-3rem pt-lg-5">Spend Quality Holidays With Us</h1>
              <p className="text-light fs-1rem-to-1-25rem">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            </div>
            <div className="col-12 col-lg-6">
              <SearchForm />
            </div>
          </div>
        </div>
      </section>
      <section className="container text-center">
        <h2 className=" pb-5 py-md-5 secondary-font fs-1-5rem-to-2-5rem">Find your next getaway</h2>
        <div className="row pb-5 g-1">
          <div className="col-6 col-lg-3 fp-img-container">
            <div className="position-relative">
              <Link to="venue">
                <img className="img-fluid" src={placeHolderImage} alt="" />
                <div className="fp-img-overlay">
                  <div className="fp-img-overlay-text text-start ps-3">
                    <p className="secondary-font text-light">Name of accommodation</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-6 col-lg-3 fp-img-container">
            <div className="position-relative">
              <Link to="venue">
                <img className="img-fluid" src={placeHolderImage} alt="" />
                <div className="fp-img-overlay">
                  <div className="fp-img-overlay-text text-start ps-3">
                    <p className="secondary-font text-light">Name of accommodation</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-6 col-lg-3 fp-img-container">
            <div className="position-relative">
              <Link to="venue">
                <img className="img-fluid" src={placeHolderImage} alt="" />
                <div className="fp-img-overlay">
                  <div className="fp-img-overlay-text text-start ps-3">
                    <p className="secondary-font text-light">Name of accommodation</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-6 col-lg-3 fp-img-container">
            <div className="position-relative">
              <Link to="venue">
                <img className="img-fluid" src={placeHolderImage} alt="" />
                <div className="fp-img-overlay">
                  <div className="fp-img-overlay-text text-start ps-3">
                    <p className="secondary-font text-light">Name of accommodation</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-end">
          <Link className="text-decoration-none" to="venue">
            <p className="secondary-font text-decoration-none dark-font fs-1rem-to-1-5rem">See full list..</p>
          </Link>
        </div>
      </section>
      <FrontpageTiles />
    </>
  );
}

export default Home;
