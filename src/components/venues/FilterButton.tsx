import { filterIcon } from "../../assets/icon";

interface FilterButtonProps {
  handleFilterClick: () => void;
}

function FilterButton({ handleFilterClick }: FilterButtonProps) {
  return (
    <div className="filter-button d-flex align-items-center cursor-pointer  custom-border-gray py-1 px-2" onClick={handleFilterClick}>
      <img className="filter-icon" src={filterIcon} alt="" />
      <p className="ps-2 mb-0">filter</p>
    </div>
  );
}

export default FilterButton;
