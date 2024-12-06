import { useState } from "react";
import { FilterButton, FilterForm } from "..";
import { FilterValues } from "../../api/const/interfaces";

interface VenueFilteringProps {
  filterValues: FilterValues;
  onFilterChange: (updatedValues: FilterValues) => void;
}

function VenueFiltering({ filterValues, onFilterChange }: VenueFilteringProps) {
  // State for visibility of filtering options
  const [showFilteringChoices, setShowFilteringChoices] = useState(false);

  // Show/hide filtering options when button is clicked
  function handleFilterClick() {
    setShowFilteringChoices(!showFilteringChoices);
  }

  return (
    <>
      <FilterButton handleFilterClick={handleFilterClick} />
      {showFilteringChoices && <FilterForm filterValues={filterValues} onFilterChange={onFilterChange} />}
    </>
  );
}

export default VenueFiltering;
