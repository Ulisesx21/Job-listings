import React from 'react';
import "../styles/jobItem.css"

const JobItem = ({ elem, addFilter }) => {

    const properties = [elem.role, elem.level, ...elem.languages, ...elem.tools];

    return (
        <div className={`job-table ${elem.featured && "featured"}`}>
            <div className='img-description-container'>
                <div>
                    <img src={elem.logo} alt={"img"} className="company-img"/>
                </div>
                <div className="company-container">
                    <div className="company-name">
                    {elem.company}
                    {elem.new && <div className='new-item'>NEW!</div>}
                    {elem.featured && <div className='featured-item'>FEATURED</div>}
                    </div>
                    <div className='company-position'>{elem.position}</div>
                    <div className="gray-items-container">
                        <div>{elem.postedAt}</div>
                        <span>·</span>
                        <div>{elem.contract}</div>
                        <span>·</span>
                        <div>{elem.location}</div>
                    </div>
                </div>
            </div>
            <div className='properties-container'>
            {properties.map((i,idx) => {
                return(
                    <div className='job-item' key={idx} onClick={()=> addFilter(i)}>{i}</div>
                )
            })}
            </div>
        </div>
    );
}

export default JobItem;
