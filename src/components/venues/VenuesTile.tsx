import { Link } from "react-router-dom";
import placeHolderImage from "../../assets/placeholderImg";

function VenueTile() {
  return (
    <div className="col-12 col-lg-6">
      <div className="d-flex form-box-shadow pe-2">
        <Link to="/venue">
          <img className="border-radius-start-5px preview-tile-img" src={placeHolderImage} alt="placeholder" />
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
  );
}

export default VenueTile;