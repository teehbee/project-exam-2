import { useParams } from "react-router-dom";
import { SingleVenueResponse } from "../api/const/interfaces";
import { Link } from "react-router-dom";
import { useApi } from "../api";
import { getVenueEndpoint } from "../api/const";
import { FrontPageLoader, FrontPageError } from "../frontpageContent";
import { formatDate } from "../utils";
import { useCalculateTotalCost } from "../utils";

const BookingSuccessTextBox: React.FC = () => {
  // Get the id from the URL
  const { id } = useParams<{ id: string }>();

  // API call to fetch the needed venue
  const { data, error, loading } = useApi<null, SingleVenueResponse>(getVenueEndpoint(id as string), "GET", null, true, true);

  // Prepare the data for cost calculation before any returns
  const dateFrom = data?.data?.bookings && data.data.bookings.length > 0 ? data.data.bookings[0].dateFrom : "";
  const dateTo = data?.data?.bookings && data.data.bookings.length > 0 ? data.data.bookings[0].dateTo : "";
  const price = data?.data?.price || 0;

  // Format dates before calling the hook for calculating costs and number of nights
  const formattedDateFrom = dateFrom ? formatDate(dateFrom) : null;
  const formattedDateTo = dateTo ? formatDate(dateTo) : null;

  // Calculate cost and number of nights of stay
  const { totalCost, numberOfNights } = useCalculateTotalCost(formattedDateFrom || "", formattedDateTo || "", price);

  // Return early if loading or error
  if (loading) return <FrontPageLoader />;
  if (error || !data) return <FrontPageError />;

  // Rest of data needed for rendering component
  const venue = data.data;

  const img = venue.media.length > 0 ? venue.media[0].url : "";
  const alt = venue.media.length > 0 ? venue.media[0].alt : "venue";
  const name = venue.name;
  const city = venue.location.city;
  const country = venue.location.country;
  const guests = venue.bookings.length > 0 ? venue.bookings[0].guests : "";

  return (
    <div className="container py-5 text-center">
      <h1 className="secondary-font fs-1-5rem-to-2-5rem">Booking confirmation</h1>
      <div className="booking-success-container form-box-shadow mt-5 row mx-1 mx-md-0">
        <div className="col-4 col-md-3 px-0">
          <Link to="/venue">
            <img className="form-box-shadow" src={img} alt={alt} />
          </Link>
        </div>
        <div className="col-8 col-md-9 text-start py-2 py-md-4 ps-3 ps-md-5">
          <h2 className="secondary-font fs-1rem-to-2rem">{name}</h2>
          <p className="fs-0-625rem-to-1rem mb-1 mb-md-3 pt-3 pt-md-5">
            {city} {country}
          </p>
          <p className="fs-0-625rem-to-1rem mb-1 mb-md-3">
            {formattedDateFrom} - {formattedDateTo} ({numberOfNights} {numberOfNights === 1 ? "night" : "nights"})
          </p>
          <p className="fs-0-625rem-to-1rem mb-1 mb-md-3">
            {guests} {guests === 1 ? "guest" : "guests"}
          </p>
          <p className="fs-0-625rem-to-1rem mb-0 mb-md-3">NOK: {totalCost},-</p>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccessTextBox;
