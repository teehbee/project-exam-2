import { venueHeroImageLarge, venueHeroImageSmall } from "../assets/img";
import { Link } from "react-router-dom";
import placeholderImage from "../assets/placeholderImg";
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
      <section id="venues-list" className="container pt-5 pt-md-0 my-5">
        <p className="secondary-font fs-1rem-to-2rem">0 venues match your search</p>
        <p className="cursor-pointer fs-0-75rem-to-1rem">Show all venues</p>
        <div className="row row-gap-3">
          <div className="col-12 col-lg-6 d-flex form-box-shadow ps-0">
            <Link to="/venue">
              <img className="border-radius-start-5px preview-tile-img" src={placeholderImage} alt="placeholder" />
            </Link>
            <div className="d-flex flex-column justify-content-between ps-3 py-2 w-100">
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-decoration-none" to="/venue">
                  <p className="mb-1 secondary-font fs-1rem-to-1-5rem">Name of accommodation</p>
                </Link>
                <p className="fs-0-75rem-to-1rem">Location</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                  <p className="fs-0-75rem-to-1rem mb-1">Price</p>
                  <p className="fs-0-75rem-to-0-875rem">per night</p>
                </div>
                <div className="align-items-end">
                  <Link to="/venue">
                    <button className="main-button-red">Book now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Venues;
