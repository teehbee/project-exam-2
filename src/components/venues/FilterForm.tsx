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

  // Check if changes are done to the checkboxes compared to the stored values in "filterValues"

  useEffect(() => {
    const isDifferent = Object.keys(checkboxes).some((key) => {
      return checkboxes[key as keyof typeof filterValues] !== filterValues[key as keyof typeof filterValues];
    });
    if (isDifferent) {
      onFilterChange(checkboxes);
      console.log("Current filter status:", checkboxes);
    }
  }, [checkboxes, filterValues, onFilterChange]);

  useEffect(() => {
    Object.keys(filterValues).forEach((key) => {
      setValue(key as keyof typeof filterValues, filterValues[key as keyof typeof filterValues]);
    });
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
