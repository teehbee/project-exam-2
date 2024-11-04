import { filterIcon } from "../../assets/icon";

function VenueFiltering() {
  return (
    <>
      <div className="filter-button d-flex align-items-center cursor-pointer  custom-border-gray py-1 px-2">
        <img className="filter-icon" src={filterIcon} alt="" />
        <p className="ps-2 mb-0">filter</p>
      </div>
      <div>Test</div>
    </>
  );
}

export default VenueFiltering;
