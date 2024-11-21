import { placeHolderImage, placeHolderImageLarge } from "../../assets/placeholderImg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useApi } from "../api";
import { getVenueEndpoint } from "../api/const";

const BookingSuccessTextBox: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log("id is", id);
  return (
    <div className="container py-5 text-center">
      <h1 className="secondary-font fs-1-5rem-to-2-5rem">Booking confirmation</h1>
      <div className="booking-success-container form-box-shadow mt-5 row mx-1 mx-md-0">
        <div className="col-4 col-md-3 px-0">
          <Link to="/venue">
            <picture>
              <source media="(min-width: 992px)" srcSet={placeHolderImageLarge} />
              <img className="form-box-shadow" src={placeHolderImage} aria-label="placeholder" />
            </picture>
          </Link>
        </div>
        <div className="col-8 col-md-9 text-start py-2 py-md-4 ps-3 ps-md-5">
          <h2 className="secondary-font fs-1rem-to-2rem">Name of accommodation</h2>
          <p className="fs-0-625rem-to-1rem mb-1 mb-md-3 pt-3 pt-md-5">Location of venue</p>
          <p className="fs-0-625rem-to-1rem mb-1 mb-md-3">From and to date</p>
          <p className="fs-0-625rem-to-1rem mb-1 mb-md-3">Number of guests</p>
          <p className="fs-0-625rem-to-1rem mb-0 mb-md-3">Total sum</p>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccessTextBox;
