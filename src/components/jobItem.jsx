import React from "react";
import "../styles/JobItem.css";

const JobItem = ({ elem, addFilter }) => {

  const {
    role,
    level,
    languages,
    tools,
    logo,
    featured,
    company,
    position,
    postedAt,
    contract,
    location,
  } = elem;

  const properties = [role, level, ...languages, ...tools];

  return (
    <div className={`job-table ${elem.featured && "featured"}`}>
      <div className="img-description-container">
        <div>
          <img src={logo} alt={"logo"} className="company-img" />
        </div>
        <div className="company-container">
          <div className="company-name">
            {company}
            {elem.new && <div className="new-item">NEW!</div>}
            {featured && <div className="featured-item">FEATURED</div>}
          </div>
          <div className="company-position">{position}</div>
          <div className="gray-items-container">
            <div>{postedAt}</div>
            <span>·</span>
            <div>{contract}</div>
            <span>·</span>
            <div>{location}</div>
          </div>
        </div>
      </div>
      <div className="properties-container">
        {properties.map((i, idx) => {
          return (
            <div className="job-item" key={idx} onClick={() => addFilter(i)}>
              {i}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobItem;
