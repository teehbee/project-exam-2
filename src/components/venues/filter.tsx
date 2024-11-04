import { useState } from "react";
import { useForm } from "react-hook-form";
import { filterIcon } from "../../assets/icon";

function VenueFiltering() {
  const [showFilteringChoices, setShowFilteringChoices] = useState(false);
  const { register, watch } = useForm();

  function handleFilterClick() {
    setShowFilteringChoices(!showFilteringChoices);
  }

  const checkboxes = watch();

  return (
    <>
      <div className="filter-button d-flex align-items-center cursor-pointer  custom-border-gray py-1 px-2" onClick={handleFilterClick}>
        <img className="filter-icon" src={filterIcon} alt="" />
        <p className="ps-2 mb-0">filter</p>
      </div>
      {showFilteringChoices && (
        <div className="py-3">
          <form action="">
            <div className="d-flex venue-filtering align-items-center flex-wrap">
              <div className="pe-3 pt-3 d-flex align-items-center">
                <label className="d-flex align-items-center">
                  <input type="checkbox" className="form-check-input" {...register("wifi")} />
                  Wi-Fi available
                </label>
              </div>
              <div className="pe-3 pt-3 d-flex align-items-center">
                <label className="d-flex align-items-center">
                  <input type="checkbox" className="form-check-input" {...register("restaurant")} />
                  Restaurant
                </label>
              </div>
              <div className="pe-3 pt-3 d-flex align-items-center">
                <label className="d-flex align-items-center">
                  <input type="checkbox" className="form-check-input" {...register("parking")} />
                  Parking
                </label>
              </div>
              <div className="pe-3 pt-3 d-flex align-items-center">
                <label className="d-flex align-items-center">
                  <input type="checkbox" className="form-check-input" {...register("pet-friendly")} />
                  Pet friendly
                </label>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default VenueFiltering;
