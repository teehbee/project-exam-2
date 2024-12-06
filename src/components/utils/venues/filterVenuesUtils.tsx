import { FilterValues } from "../../api/const/interfaces";

// Checking changes compared to initial values of filter of facilities

export const checkForFilterChanges = (checkboxes: FilterValues, filterValues: FilterValues, onFilterChange: (updatedValues: FilterValues) => void) => {
  const isDifferent = Object.keys(checkboxes).some((key) => {
    return checkboxes[key as keyof FilterValues] !== filterValues[key as keyof FilterValues];
  });
  if (isDifferent) {
    onFilterChange(checkboxes);
  }
};

// Setting changes

export const setInitialFilterValues = (filterValues: FilterValues, setValue: (key: keyof FilterValues, value: boolean) => void) => {
  Object.keys(filterValues).forEach((key) => {
    setValue(key as keyof FilterValues, filterValues[key as keyof FilterValues]);
  });
};
