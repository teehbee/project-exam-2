import { placeHolderImage } from "../../assets/placeholderImg";
import { Link } from "react-router-dom";

function ProfileBookingTile() {
  return (
    <div className="profile-booking-container form-box-shadow mt-3 row mx-1 mx-md-0">
      <div className="col-4 col-md-3 px-0">
        <Link to="/venue">
          <img className="form-box-shadow" src={placeHolderImage} aria-label="placeholder" />
        </Link>
      </div>
      <div className="col-8 col-md-9 text-start ps-3 ps-md-5">
        <h4 className="secondary-font fs-1rem-to-1-5rem mt-1 mb-0">Venue name</h4>
        <p className="fw-light fs-0-625rem-to-1rem mt-md-1">Location of venue</p>
        <p className="fw-light fs-0-625rem-to-1rem mb-0 mt-md-4">From and to date</p>
        <p className="fw-light fs-0-625rem-to-1rem mb-0 mt-md-2">Number of guests</p>
        <p className="fs-0-625rem-to-1rem mt-md-2">Total sum</p>
      </div>
    </div>
  );
}

export default ProfileBookingTile;