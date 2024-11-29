import { Link } from "react-router-dom";
import { ProfileBookings } from "../api/interfaces";
import { formatDate } from "../utils";
import { useCalculateTotalCost } from "../utils";

interface bookingData {
  booking: ProfileBookings;
}

const ProfileBookingTile: React.FC<bookingData> = ({ booking }) => {
  // Variables
  const id = booking.venue.id;
  const img = booking.venue.media.length > 0 ? booking.venue.media[0].url : "https://img.freepik.com/premium-vector/cartoon-hotel-with-sign-that-says-hotel-it_534019-32.jpg";
  const alt = booking.venue.media.length > 0 ? booking.venue.media[0].alt : "Accommodation image";
  const name = booking.venue.name;
  const city = booking.venue.location?.city || "Surprise destination";
  const country = booking.venue.location?.country || "";
  const dateFrom = booking.dateFrom;
  const dateTo = booking.dateTo;
  const guests = booking.guests;
  const price = booking.venue.price;
  // Formatted dates
  const formattedDateFrom = formatDate(dateFrom);
  const formattedDateTo = formatDate(dateTo);

  // Calculate total sum of stay

  const { totalCost } = useCalculateTotalCost(formattedDateFrom, formattedDateTo, price);

  // console.log("booking", booking);
  return (
    <div className="profile-booking-container form-box-shadow mt-3 row mx-1 mx-md-0 mb-4 mb-md-5">
      <div className="col-4 col-md-3 px-0">
        <Link to={`/venue/${id}`}>
          <img className="form-box-shadow" src={img} aria-label={alt} />
        </Link>
      </div>
      <div className="col-8 col-md-9 text-start ps-3 ps-md-5 pt-1">
        <Link className="text-decoration-none font-gray" to={`/venue/${id}`}>
          <h4 className="secondary-font fs-1rem-to-1-5rem mt-1 mb-0 fw-bold">{name}</h4>
        </Link>
        <p className="fs-0-625rem-to-1rem mt-md-1 fw-medium">
          {city} {country}
        </p>
        <p className="fs-0-625rem-to-1rem mb-0 mt-md-4">
          {formattedDateFrom} to {formattedDateTo}
        </p>
        <p className="fs-0-625rem-to-1rem mb-0 mt-md-2">
          {guests} {guests === 1 ? "guest" : "guests"}
        </p>
        <p className="fs-0-625rem-to-1rem mt-md-2 ">NOK {totalCost},-</p>
      </div>
    </div>
  );
};

export default ProfileBookingTile;
