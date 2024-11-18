import { Link } from "react-router-dom";
import { placeHolderImage } from "../../assets/placeholderImg";

function ProfileBookingsManaged() {
  return (
    <div className="profile-booking-container form-box-shadow mt-3 row mx-1 mx-md-0">
      <div className="col-4 col-md-3 px-0">
        <Link to="/venue">
          <img className="form-box-shadow" src={placeHolderImage} aria-label="placeholder" />
        </Link>
      </div>
      <div className="col-8 col-md-9 text-start ps-3 ps-md-5 py-3 d-flex justify-content-between">
        <div>
          <h4 className="secondary-font fs-1rem-to-1-5rem mt-1 mb-0">Venue name</h4>
        </div>
        <div className="d-flex flex-column justify-content-between p-md-3">
          <Link to="/update-venue">
            <button className="main-button-gray my-1 py-1 fs-0-625rem-to-0-875rem">Update</button>
          </Link>
          <Link to="/venue-manager-administration">
            <button className="main-button-gray my-1 py-1 fs-0-625rem-to-0-875rem">Bookings</button>
          </Link>
          <Link to="/">
            <button className="main-button-gray my-1 py-1 fs-0-625rem-to-0-875rem">Delete</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileBookingsManaged;
