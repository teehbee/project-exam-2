import { SingleVenueProp } from "../../api/const/interfaces";
import { petIcon, wifiIcon, restaurantIcon, parkingIcon } from "../../../assets/icon";
import { starIcon } from "../../../assets/icon";

const VenueImageAndText: React.FC<SingleVenueProp> = ({ venue }) => {
  const venueData = venue.data;

  const img = venueData.media.length > 0 ? venue.data.media[0].url : "";
  const alt = venueData.media.length > 0 ? venue.data.media[0].alt : "no alt text provided";
  const city = venueData.location.city || "Mystery destination";
  const country = venueData.location.country || "";
  const rating = venueData.rating;

  return (
    <div className="venue-image-and-text-container col-12 col-md-5 mx-auto">
      <img className="img-fluid form-box-shadow" src={img} alt={alt} />
      <div className="text-start pt-3 pt-md-4">
        <h1 className="secondary-font fs-1-25rem-to-1-5rem mb-3">
          {venueData.name},{" "}
          <span className="secondary-font fs-1-25rem-to-1-5rem">
            {city}, {country}
          </span>
        </h1>
        <p className="mb-2 fs-0-75rem-to-1rem">NOK {venueData.price} per night</p>
        <div className="mb-3">
          {[...Array({ rating })].map((_, index) => (
            <img key={index} src={starIcon} alt="star" />
          ))}
        </div>
        <p className="mb-2 fs-0-75rem-to-1-125rem mb-md-3">{venueData.description}</p>
        <p className="fs-0-75rem-to-1-125rem">Max number of guests: {venueData.maxGuests}</p>
      </div>
      <div className="text-start">
        <h2 className="fs-1rem-to-1-5rem pt-3 pt-md-4">Facilities</h2>
        <div className="mt-md-2 d-flex flex-wrap pt-3">
          <div className="d-flex me-2 me-md-5 mt-1">
            <img className="facility-icon me-2" src={wifiIcon} alt="" />
            <p className="fs-0-75rem-to-1rem">Wi-Fi Available</p>
          </div>
          <div className="d-flex me-2 me-md-5 mt-1">
            <img className="facility-icon me-2" src={restaurantIcon} alt="" />
            <p className="fs-0-75rem-to-1rem">Restaurant</p>
          </div>
          <div className="d-flex me-2 me-md-5 mt-1">
            <img className="facility-icon me-2 " src={parkingIcon} alt="" />
            <p className="fs-0-75rem-to-1rem">Parking</p>
          </div>
          <div className="d-flex me-2 me-md-5 mt-1">
            <img className="facility-icon me-2" src={petIcon} alt="" />
            <p className="fs-0-75rem-to-1rem">Pet friendly</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueImageAndText;
