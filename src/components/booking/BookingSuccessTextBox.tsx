import { placeHolderImage, placeHolderImageLarge } from "../../assets/placeholderImg";
import { useParams } from "react-router-dom";
import { SingleVenueResponse } from "../api/const/interfaces";
import { Link } from "react-router-dom";
import { useApi } from "../api";
import { getVenueEndpoint } from "../api/const";
import { FrontPageLoader, FrontPageError } from "../frontpageContent";

const BookingSuccessTextBox: React.FC = () => {
  // find id from url

  const { id } = useParams<{ id: string }>();

  const { data, error, loading } = useApi<null, SingleVenueResponse>(getVenueEndpoint(id as string), "GET", null, true, true);

  if (loading) return <FrontPageLoader />;
  if (error) return <FrontPageError />;

  if (!data) {
    return <FrontPageError />;
  }

  const venue = data.data;

  const img = venue.media.length > 0 ? venue.media[0].url : "";
  const alt = venue.media.length > 0 ? venue.media[0].alt : "venue";
  const name = venue.name;
  const city = venue.location.city;
  const country = venue.location.country;

  console.log("data is", venue);

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
          <p className="fs-0-625rem-to-1rem mb-1 mb-md-3">From and to date</p>
          <p className="fs-0-625rem-to-1rem mb-1 mb-md-3">Number of guests</p>
          <p className="fs-0-625rem-to-1rem mb-0 mb-md-3">Total sum</p>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccessTextBox;
