import { useForm } from "react-hook-form";
import { useEffect } from "react";

interface FilterFormProps {
  filterValues: {
    wifi: boolean;
    restaurant: boolean;
    parking: boolean;
    petFriendly: boolean;
  };
  onFilterChange: (updatedValues: any) => void;
}

// No validation, but using react hook forms to keep track of states of filtering options

function FilterForm({ filterValues, onFilterChange }: FilterFormProps) {
  const { register, watch, setValue } = useForm({
    defaultValues: filterValues,
  });

  // watch is watching for changes in the form

  const checkboxes = watch();

  useEffect(() => {
    const isDifferent = Object.keys(checkboxes).some((key) => checkboxes[key] !== filterValues[key]);
    if (isDifferent) {
      onFilterChange(checkboxes);
    }
  }, [checkboxes, filterValues, onFilterChange]);

  useEffect(() => {
    Object.keys(filterValues).forEach((key) => {
      setValue(key, filterValues[key]);
    });
  }, [filterValues, setValue]);

  // for now the data is only console.logged. will be used for filtering api data later on

  useEffect(() => {
    console.log("Current filter status:", checkboxes);
  }, [checkboxes]);

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
              <input type="checkbox" className="form-check-input mt-0" {...register("pet-friendly")} />
              Pet friendly
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FilterForm;
