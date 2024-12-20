import { SingleVenueProp } from "../../api/const/interfaces";
import { useState, useEffect } from "react";
import { WifiFacility, BreakfastFacility, ParkingFacility, PetsFacility } from "./facilities";
import { starIcon } from "../../../assets/icon";
import { Media } from "../../api/const/interfaces";
import { placeHolder } from "../../../assets/img";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const VenueImageAndText: React.FC<SingleVenueProp> = ({ venue }) => {
  const [venueImages, setVenueImages] = useState<Media[]>([]);
  const venueData = venue.data;

  const city = venueData.location.city || "Mystery destination";
  const country = venueData.location.country || "";

  // Create fallback alt text for fancybox

  const getAltText = (alt: string | undefined) => alt || "No description available for this image";

  // In case of rating with decimals
  const rating = Math.round(venueData.rating);

  // Create image gallery for Fancybox. Hidden div is created to store images if more than one.

  useEffect(() => {
    if (venueData.media && venueData.media.length > 0) {
      setVenueImages(venueData.media);
    }
  }, [venueData.media]);

  // Binder for fancybox gallery

  useEffect(() => {
    Fancybox.bind('[data-fancybox="venueGallery"]');
  }, [venueImages]);

  return (
    <div className="venue-image-and-text-container col-12 col-md-5 mx-auto">
      {venueImages.length > 0 ? (
        <a href={venueImages[0].url} data-fancybox="venueGallery" data-caption={getAltText(venueImages[0].alt)}>
          <picture>
            <source media="(min-width: 1400px)" srcSet={venueImages[0].url} width="525" />
            <source media="(min-width: 1200px)" srcSet={venueImages[0].url} width="450" />
            <source media="(min-width: 992px)" srcSet={venueImages[0].url} width="375" height="225" />
            <source media="(min-width: 768px)" srcSet={venueImages[0].url} width="200" height="200" />
            <img className="img-fluid form-box-shadow" src={venueImages[0].url} alt={getAltText(venueImages[0].alt)} width="325" height="215" />
          </picture>
        </a>
      ) : (
        <img className="img-fluid form-box-shadow" src={placeHolder} alt="No images available" />
      )}
      <div className="text-start pt-3 pt-md-4">
        <h1 className="secondary-font fs-1-25rem-to-1-5rem mb-3">
          <span className="secondary-font fw-bold">{venueData.name}, </span>
          <span className="secondary-font fs-1-25rem-to-1-5rem">
            {city}
            {country ? `, ${country}` : ""}
          </span>
        </h1>
        <p className="mb-2 fs-0-75rem-to-1rem fw-medium">NOK{venueData.price},- per night</p>
        <div className="mb-3">
          {[...Array(rating)].map((_, index) => (
            <img key={index} src={starIcon} alt="star" />
          ))}
        </div>
        <p className="mb-2 fs-0-75rem-to-1-125rem mb-md-3">{venueData.description}</p>
        <p className="fs-0-75rem-to-1-125rem">
          Max number of guests: <span className="fw-medium">{venueData.maxGuests}</span>
        </p>
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
      <div className="d-none">
        {venueImages.length > 1 && (
          <div className="venue-gallery">
            {venueImages.slice(1).map((image, index) => (
              <a key={index} href={image.url} data-fancybox="venueGallery" data-caption={getAltText(image.alt)}>
                <img src={image.url} alt={getAltText(image.alt)} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VenueImageAndText;
