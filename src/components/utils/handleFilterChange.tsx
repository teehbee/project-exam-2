import { FilterValues } from "../api/const/interfaces";

// Set values from facility filters

export const handleFilterChange = (updatedValues: FilterValues, setFilterValues: React.Dispatch<React.SetStateAction<FilterValues>>) => {
  setFilterValues(updatedValues);
};
