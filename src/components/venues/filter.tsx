import { useState } from "react";
import { FilterButton, FilterForm } from "./";

interface FilterValues {
  wifi: boolean;
  restaurant: boolean;
  parking: boolean;
  petFriendly: boolean;
}

function VenueFiltering() {
  // State for visibility of filtering options
  const [showFilteringChoices, setShowFilteringChoices] = useState(false);
  // Storing filtering choices
  const [filterValues, setFilterValues] = useState<FilterValues>({
    wifi: false,
    restaurant: false,
    parking: false,
    petFriendly: false,
  });

  // Show/hide filtering options when button is clicked

  function handleFilterClick() {
    setShowFilteringChoices(!showFilteringChoices);
  }

  function handleFilterChange(updatedValues: FilterValues) {
    setFilterValues(updatedValues);
  }

  return (
    <>
      <FilterButton handleFilterClick={handleFilterClick} />
      {showFilteringChoices && <FilterForm filterValues={filterValues} onFilterChange={handleFilterChange} />}
    </>
  );
}

export default VenueFiltering;
