import { Link } from "react-router-dom";
import { VenueManagerBookings } from "../api/interfaces";

interface VenueManagerBookingsData {
  venue: VenueManagerBookings;
}

const ProfileBookingsManaged: React.FC<VenueManagerBookingsData> = ({ venue }) => {
  const id = venue.id;
  const name = venue.name;
  const img = venue.media.length > 0 ? venue.media[0].url : "";
  const alt = venue.media.length > 0 ? venue.media[0].alt : "Accommodation image";
  return (
    <div className="profile-booking-container form-box-shadow mt-3 row mx-1 mx-md-0">
      <div className="col-4 col-md-3 px-0">
        <Link to={`/venue/${id}`}>
          <img className="form-box-shadow" src={img} alt={alt} />
        </Link>
      </div>
      <div className="col-8 col-md-9 text-start ps-3 ps-md-5 py-3 d-flex justify-content-between">
        <div>
          <Link className="text-decoration-none font-gray" to={`/venue/${id}`}>
            <h4 className="secondary-font fs-1rem-to-1-5rem mt-1 mb-0 fw-bold">{name}</h4>
          </Link>
        </div>
        <div className="d-flex flex-column justify-content-between p-md-3">
          <Link to={`/update-venue/${id}`}>
            <button className="main-button-gray my-1 py-1 fs-0-625rem-to-0-875rem">Update</button>
          </Link>
          <Link to={`/venue-manager-administration/${id}`}>
            <button className="main-button-gray my-1 py-1 fs-0-625rem-to-0-875rem">Bookings</button>
          </Link>
          <button className="main-button-gray my-1 py-1 fs-0-625rem-to-0-875rem">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBookingsManaged;
