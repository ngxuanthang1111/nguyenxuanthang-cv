import React from 'react';

const ActivesChild = (props) => {
    return (
        <div className="d-flex component__actives--content">
            <div className="component__actives--time">
                <p>{props.startTime} <span>-</span> {props.endTime}</p>
            </div>
            <div className= "component__actives--work">
                <h4>{props.active}</h4>
                <small>{props.role}</small>
                <p>{props.work}</p>
            </div>
        </div>
    );
};

export default ActivesChild;