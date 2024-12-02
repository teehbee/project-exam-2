import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { bookingTileInterface } from "../api/const/interfaces";
import { WifiFacilityNoText, BreakfastFacilityNoText, ParkingFacilityNoText, PetsFacilityNoText } from "../venue/elements/facilities";
import { starIcon } from "../../assets/icon";
import { placeHolder } from "../../assets/img";

const VenueTile: React.FC<bookingTileInterface> = ({ venue }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const img = venue.media.length > 0 ? venue.media[0].url : placeHolder;
  const alt = venue.media.length > 0 ? venue.media[0].alt : "Accommodation image";
  const city = venue.location?.city || "Surprise destination";
  const country = venue.location?.country || "";
  // In case of ratings with decimals
  const rating = Math.round(venue.rating);

  return (
    <div className="col-12 col-lg-6">
      <div className="d-flex form-box-shadow pe-2">
        <div className="position-relative">
          <Link className="" to={`/venue/${venue.id}`}>
            <div className="gradient-container">
              <img className=" border-radius-start-5px preview-tile-img" src={img} alt={alt} />
            </div>
          </Link>
          {rating > 0 && (
            <div className="ps-2 position-absolute star-container">
              {[...Array(rating)].map((_, index) => (
                <img key={index} src={starIcon} alt="star" />
              ))}
            </div>
          )}
        </div>
        <div className="d-flex flex-column justify-content-between ps-3 py-2 w-100">
          <div className="d-flex flex-column justify-content-start">
            <div className="d-flex align-items-center">
              <div>
                <Link className="text-decoration-none" to={`/venue/${venue.id}`}>
                  <p className="mb-1 secondary-font fs-1rem-to-1-5rem fw-bold text-ellipsis-on-title">{venue.name}</p>
                </Link>
              </div>
            </div>
            <p className="fs-0-75rem-to-1rem mb-0 fw-medium">
              {city}
              {country ? `, ${country}` : ""}
            </p>
            <div className="my-1 d-flex justify-content-start align-items-center">
              {venue.meta.wifi && <WifiFacilityNoText />}
              {venue.meta.breakfast && <BreakfastFacilityNoText />}
              {venue.meta.parking && <ParkingFacilityNoText />}
              {venue.meta.pets && <PetsFacilityNoText />}
            </div>
            <div>
              <p className="fs-0-75rem-to-1rem">Max number of guests: {venue.maxGuests}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <p className="fs-0-75rem-to-1rem mb-0">
                NOK <span className="fw-medium">{venue.price}</span>,-
              </p>
              <p className="fs-0-75rem-to-0-875rem mb-0">per night</p>
            </div>
            <div className="align-items-end pe-md-3">
              <Link to={`/venue/${venue.id}`}>
                <button className="main-button-red">{isLargeScreen ? "Book now" : "Book"}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueTile;
