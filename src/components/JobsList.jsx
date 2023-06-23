import { useFilter } from "../context/JobFilterContext";
import JobItem from "./JobItem";
import "../styles/JobList.css"

export const JobsList = () => {

  const { filteredItems, addFilter } = useFilter();

  return (
    <div className="job-items-container">
      {filteredItems.map((el, idx) => {
        return <JobItem elem={el} key={idx} addFilter={addFilter}></JobItem>;
      })}
    </div>
  );
};
