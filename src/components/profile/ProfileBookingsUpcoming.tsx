import { Link } from "react-router-dom";
import { ProfileBookings } from "../api/const/interfaces";
import { formatDate } from "../utils";
import { useCalculateTotalCost } from "../utils";
import { placeHolder } from "../../assets/img";

interface bookingData {
  booking: ProfileBookings;
}

const ProfileBookingTile: React.FC<bookingData> = ({ booking }) => {
  const id = booking.venue.id;
  const img = booking.venue.media.length > 0 ? booking.venue.media[0].url : placeHolder;
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

  return (
    <div className="profile-booking-container form-box-shadow mt-3 row mx-1 mx-md-0 mb-4 mb-md-5">
      <div className="col-4 col-md-3 px-0">
        <Link to={`/venue/${id}`}>
          <picture>
            <source media="(min-width: 1200px)" srcSet={img} width="201" height="190" />
            <source media="(min-width: 1200px)" srcSet={img} width="171" height="190" />
            <source media="(min-width: 992px)" srcSet={img} width="141" height="190" />
            <source media="(min-width: 768px)" srcSet={img} width="168" height="190" />
            <img className="form-box-shadow" src={img} aria-label={alt} width="160" height="120" />
          </picture>
        </Link>
      </div>
      <div className="col-8 col-md-9 text-start ps-3 ps-md-5 pt-1">
        <Link className="text-decoration-none font-gray" to={`/venue/${id}`}>
          <h4 className="secondary-font fs-1-25rem-to-1-5rem mb-0 fw-bold">{name}</h4>
        </Link>
        <p className="fs-0-75rem-to-1rem mt-md-1 fw-medium">
          {city}
          {country ? `, ${country}` : ""}
        </p>
        <p className="fs-0-75rem-to-1rem mb-0 mt-md-4">
          {formattedDateFrom} to {formattedDateTo}
        </p>
        <p className="fs-0-75rem-to-1rem mb-0 mt-md-2">
          {guests} {guests === 1 ? "guest" : "guests"}
        </p>
        <p className="fs-0-75rem-to-1rem mt-md-2 mb-0">NOK {totalCost},-</p>
      </div>
    </div>
  );
};

export default ProfileBookingTile;
