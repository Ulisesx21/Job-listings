import { useFilter } from "../context/JobFilterContext";
import FilterItem from "./FilterItem";
import "../styles/FilterBar.css"


export const FilterBar = () => {

  const {activeFilters, deleteFilter} = useFilter();

  return (
    <div className="filter-container">
      <div className="filter-bar">
        {activeFilters.map((el, idx) => {
          return (
            <FilterItem
              elem={el}
              key={idx}
              deleteFilter={() => deleteFilter(el)}
              idx={idx}
            ></FilterItem>
          );
        })}
      </div>
      <div>
        {
          <button onClick={() => deleteFilter()} className="clear-btn">
            Clear
          </button>
        }
      </div>
    </div>
  );
};
