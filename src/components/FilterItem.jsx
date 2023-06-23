import React from "react";
import "../styles/FilterItem.css";
import iconRemove from "../icons/icon-remove.svg";

const Filteritem = ({ elem, deleteFilter }) => {
  
  return (
    <div className="filter-box-container">
      <div className="filter-box">{elem}</div>
      <div className="filter-btn-container">
        <button onClick={() => deleteFilter(elem)} className="filter-btn">
          <img src={iconRemove} alt="icon" />
        </button>
      </div>
    </div>
  );
};

export default Filteritem;
