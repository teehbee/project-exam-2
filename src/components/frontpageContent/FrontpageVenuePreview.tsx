import { Link } from "react-router-dom";
import placeHolderImage from "../../assets/placeholderImg";

function FrontpageVenuePreview() {
  return (
    <section className="container text-center mt-125px mt-md-4">
      <h2 className=" pb-5 py-md-5 secondary-font fs-1-5rem-to-2-5rem">Find your next getaway</h2>
      <div className="row pb-5 gy-4">
        <div className="col-6 col-lg-3 fp-img-container">
          <div className="position-relative">
            <Link to="venue">
              <img className="img-fluid" src={placeHolderImage} alt="placeholder image" />
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
              <img className="img-fluid" src={placeHolderImage} alt="placeholder image" />
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
              <img className="img-fluid" src={placeHolderImage} alt="placeholder image" />
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
              <img className="img-fluid" src={placeHolderImage} alt="placeholder image" />
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
  );
}

export default FrontpageVenuePreview;
