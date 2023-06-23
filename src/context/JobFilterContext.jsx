import { createContext, useContext, useEffect, useState } from "react";
import { data as items } from "../data/data";

export const JobFilterContext = createContext();

export const useFilter = () => {
  return useContext(JobFilterContext);
}

export const JobFilterContextProvider = ({ children }) => {

  const [activeFilters, setActiveFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  const addFilter = (filter) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const deleteFilter = (filter) => {
    if (!filter) setActiveFilters([]);
    else {
      const temp = activeFilters.filter((el) => el !== filter);
      setActiveFilters(temp);
    }
  };

  const filterItems = () => {
    if (activeFilters.length > 0) {
      let tempItems = items.filter((item) => {
        let temp = activeFilters.every((filter) =>
          [item.role, item.level, ...item.languages, ...item.tools].includes(
            filter
          )
        );
        return temp;
      });
      setFilteredItems(tempItems);
    } else {
      setFilteredItems([...items]);
    }
  };

  useEffect(() => {
    filterItems();
    // eslint-disable-next-line
  }, [activeFilters]);

  return (
    <JobFilterContext.Provider
      value={{
        activeFilters,
        filteredItems,
        addFilter,
        deleteFilter,
        filterItems,
      }}
    >
      {children}
    </JobFilterContext.Provider>
  );
};
