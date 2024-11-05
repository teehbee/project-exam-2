interface FilterValues {
  wifi: boolean;
  restaurant: boolean;
  parking: boolean;
  petFriendly: boolean;
}

// checking changes compared to initial values of filter

export const checkForFilterChanges = (checkboxes: FilterValues, filterValues: FilterValues, onFilterChange: (updatedValues: FilterValues) => void) => {
  const isDifferent = Object.keys(checkboxes).some((key) => {
    return checkboxes[key as keyof FilterValues] !== filterValues[key as keyof FilterValues];
  });
  if (isDifferent) {
    onFilterChange(checkboxes);
    console.log("Current filter status:", checkboxes);
  }
};

// setting changes

export const setInitialFilterValues = (filterValues: FilterValues, setValue: (key: keyof FilterValues, value: boolean) => void) => {
  Object.keys(filterValues).forEach((key) => {
    setValue(key as keyof FilterValues, filterValues[key as keyof FilterValues]);
  });
};
