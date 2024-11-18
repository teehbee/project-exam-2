import { petIcon } from "../../../../assets/icon";

function PetsFacility() {
  return (
    <div className="d-flex me-2 me-md-5 mt-1">
      <img className="facility-icon me-2" src={petIcon} alt="" />
      <p className="fs-0-75rem-to-1rem">Pet friendly</p>
    </div>
  );
}

export default PetsFacility;
