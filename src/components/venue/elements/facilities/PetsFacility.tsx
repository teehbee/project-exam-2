import { petIcon } from "../../../../assets/icon";

function PetsFacility() {
  return (
    <div className="d-flex me-2 me-md-5 mt-1">
      <img className="facility-icon me-2" src={petIcon} aria-label="pets allowed" />
      <p className="fs-0-75rem-to-1rem">Pet friendly</p>
    </div>
  );
}

function PetsFacilityNoText() {
  return <img className="facility-icon me-2" src={petIcon} aria-label="pets allowed" />;
}

export { PetsFacility, PetsFacilityNoText };
