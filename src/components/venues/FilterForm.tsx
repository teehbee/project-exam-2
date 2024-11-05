import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { checkForFilterChanges, setInitialFilterValues } from "../utils";

interface FilterValues {
  wifi: boolean;
  restaurant: boolean;
  parking: boolean;
  petFriendly: boolean;
}

interface FilterFormProps {
  filterValues: FilterValues;
  onFilterChange: (updatedValues: FilterValues) => void;
}

// No validation due to filtering being optional, but using react hook forms to keep track of states of filtering options

function FilterForm({ filterValues, onFilterChange }: FilterFormProps) {
  const { register, watch, setValue } = useForm({
    defaultValues: filterValues,
  });

  // watching for changes in the form

  const checkboxes = watch();

  // imported components checking for changes and setting initial values

  useEffect(() => {
    checkForFilterChanges(checkboxes, filterValues, onFilterChange);
  }, [checkboxes, filterValues, onFilterChange]);

  useEffect(() => {
    setInitialFilterValues(filterValues, setValue);
  }, [filterValues, setValue]);

  return (
    <div className="py-3">
      <form action="">
        <div className="d-flex venue-filtering align-items-center flex-wrap">
          <div className="pe-3 pt-3">
            <label className="d-flex align-items-center">
              <input type="checkbox" className="form-check-input mt-0" {...register("wifi")} />
              Wi-Fi available
            </label>
          </div>
          <div className="pe-3 pt-3">
            <label className="d-flex align-items-center">
              <input type="checkbox" className="form-check-input mt-0" {...register("restaurant")} />
              Restaurant
            </label>
          </div>
          <div className="pe-3 pt-3">
            <label className="d-flex align-items-center">
              <input type="checkbox" className="form-check-input mt-0" {...register("parking")} />
              Parking
            </label>
          </div>
          <div className="pe-3 pt-3">
            <label className="d-flex align-items-center">
              <input type="checkbox" className="form-check-input mt-0" {...register("petFriendly")} />
              Pet friendly
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FilterForm;
