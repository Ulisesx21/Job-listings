import { useState, useEffect } from 'react';
import { data } from "./data/data"
import JobItem from './components/jobItem';
import Filter from './components/filter';
import HeaderDesktop from "./icons/bg-header-desktop.svg"
import HeaderMobile from "./icons/bg-header-mobile.svg"
import './App.css';

function App() {

  const [activeFilters, setActiveFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(data);
  const items = data;

  useEffect(() => {
    filterItems()
    // eslint-disable-next-line
  }, [activeFilters]);


  const addFilter = (filter) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const deleteFilter = (filter) => {
    const temp = activeFilters.filter(el => el !== filter);
    setActiveFilters(temp)
  }

  const filterItems = () => {
    if (activeFilters.length > 0) {
      let tempItems = items.filter(item => {
        let temp = activeFilters.every(filter => [item.role, item.level, ...item.languages, ...item.tools].includes(filter))
        return temp
      })
      setFilteredItems(tempItems)
    } else {
      setFilteredItems([...items])
    }
  }

  return (
    <div className="App">
      <div className="img-container">
        <img src={HeaderDesktop} alt="img" className='header-desktop'/>
        <img src={HeaderMobile} alt="img" className='header-mobile'/>
      </div>
      <div className="filter-container">
        <div className='filter-bar'>
          {activeFilters.map((el, idx) => {
            return (
              <Filter elem={el} key={idx} deleteFilter={deleteFilter} idx={idx}></Filter>
            )
          })}
        </div>
        <div>
          {<button onClick={() => setActiveFilters([])} className="clear-btn">Clear</button>}
        </div>
      </div>
      <div className="job-items-container">
        {filteredItems.map((el, idx) => {
          return (
            <JobItem elem={el} key={idx} addFilter={addFilter}></JobItem>
          )
        })}
      </div>
    </div>
  );
}

export default App;
