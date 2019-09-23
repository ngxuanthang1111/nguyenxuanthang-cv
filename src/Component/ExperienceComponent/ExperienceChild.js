import React from 'react';

const ExperienceChild = (props)=> {
    return (
        <div className="d-flex component__experience--company">
            <div className="component__experience--time">
                <p>{props.startTime} <span>-</span> {props.endTime}</p>
            </div>
            <div className="component__experience--work">
                <h4>{props.company}</h4>
                <small>{props.position}</small>
                <p>{props.experience}</p>
            </div>
        </div>
    );
}

export default ExperienceChild;