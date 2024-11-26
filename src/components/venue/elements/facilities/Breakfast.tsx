import { restaurantIcon } from "../../../../assets/icon";

function BreakfastFacility() {
  return (
    <div className="d-flex me-2 me-md-5 mt-1">
      <img className="facility-icon me-2" src={restaurantIcon} alt="" />
      <p className="fs-0-75rem-to-1rem">Restaurant</p>
    </div>
  );
}

function BreakfastFacilityNoText() {
  return <img className="facility-icon me-2" src={restaurantIcon} alt="" />;
}

export { BreakfastFacility, BreakfastFacilityNoText };
