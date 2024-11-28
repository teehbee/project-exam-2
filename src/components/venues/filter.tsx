import { useState } from "react";
import { FilterButton, FilterForm } from "./";

interface FilterValues {
  wifi: boolean;
  breakfast: boolean;
  parking: boolean;
  pets: boolean;
}

function VenueFiltering() {
  // State for visibility of filtering options
  const [showFilteringChoices, setShowFilteringChoices] = useState(false);
  // Storing filtering choices
  const [filterValues, setFilterValues] = useState<FilterValues>({
    wifi: false,
    breakfast: false,
    parking: false,
    pets: false,
  });

  // Show/hide filtering options when button is clicked

  function handleFilterClick() {
    setShowFilteringChoices(!showFilteringChoices);
  }

  function handleFilterChange(updatedValues: FilterValues) {
    setFilterValues(updatedValues);
  }

  console.log(filterValues);

  return (
    <>
      <FilterButton handleFilterClick={handleFilterClick} />
      {showFilteringChoices && <FilterForm filterValues={filterValues} onFilterChange={handleFilterChange} />}
    </>
  );
}

export default VenueFiltering;
