import { SingleVenueProp } from "../../api/const/interfaces";
import { Link } from "react-router-dom";
import { useState } from "react";
import { WifiFacility, BreakfastFacility, ParkingFacility, PetsFacility } from "./facilities";
import { starIcon } from "../../../assets/icon";
import { Media } from "../../api/interfaces";

const VenueImageAndText: React.FC<SingleVenueProp> = ({ venue }) => {
  const [venueImages, setVenueImages] = useState<Media[]>([]);
  const venueData = venue.data;

  const id = venue.data.id;
  const img = venueData.media.length > 0 ? venue.data.media[0].url : "https://img.freepik.com/premium-vector/cartoon-hotel-with-sign-that-says-hotel-it_534019-32.jpg";
  const alt = venueData.media.length > 0 ? venue.data.media[0].alt : "no alt text provided";
  const city = venueData.location.city || "Mystery destination";
  const country = venueData.location.country || "";

  return (
    <div className="venue-image-and-text-container col-12 col-md-5 mx-auto">
      <img className="img-fluid form-box-shadow" src={img} alt={alt} />
      <div className="text-start pt-3 pt-md-4">
        <Link className="text-decoration-none font-gray" to={`/venue/${id}`}>
          <h1 className="secondary-font fs-1-25rem-to-1-5rem mb-3">
            {venueData.name},{" "}
            <span className="secondary-font fs-1-25rem-to-1-5rem">
              {city}, {country}
            </span>
          </h1>
        </Link>
        <p className="mb-2 fs-0-75rem-to-1rem">NOK {venueData.price},- per night</p>
        <div className="mb-3">
          {[...Array(venueData.rating)].map((_, index) => (
            <img key={index} src={starIcon} alt="star" />
          ))}
        </div>
        <p className="mb-2 fs-0-75rem-to-1-125rem mb-md-3">{venueData.description}</p>
        <p className="fs-0-75rem-to-1-125rem">Max number of guests: {venueData.maxGuests}</p>
      </div>
      <div className="text-start">
        <h2 className="fs-1rem-to-1-5rem pt-3 pt-md-4">Facilities</h2>
        <div className="mt-md-2 d-flex flex-wrap pt-3">
          {venueData.meta.wifi && <WifiFacility />}
          {venueData.meta.breakfast && <BreakfastFacility />}
          {venueData.meta.parking && <ParkingFacility />}
          {venueData.meta.pets && <PetsFacility />}
        </div>
      </div>
    </div>
  );
};

export default VenueImageAndText;
