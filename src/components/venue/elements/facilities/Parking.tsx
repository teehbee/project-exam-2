import { parkingIcon } from "../../../../assets/icon";

function ParkingFacility() {
  return (
    <div className="d-flex me-2 me-md-5 mt-1">
      <img className="facility-icon me-2 " src={parkingIcon} aria-label="parking available" />
      <p className="fs-0-75rem-to-1rem">Parking</p>
    </div>
  );
}

function ParkingFacilityNoText() {
  return <img className="facility-icon me-2 " src={parkingIcon} aria-label="parking available" />;
}

export { ParkingFacility, ParkingFacilityNoText };
