import React, {Component} from 'react';
import './ActivesComponent.css';
import ActivesChild from "./ActivesChild";

class ActivesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "hoạt động",
            actives: [
                {
                    startTime: '06/2017',
                    endTime: '02/2018',
                    active: 'active-1',
                    role: 'internship',
                    work: 'content-1'
                },
                {
                    startTime: '06/2017',
                    endTime: '02/2018',
                    active: 'active-2',
                    role: 'internship',
                    work: 'content-1'
                },
                {
                    startTime: '06/2017',
                    endTime: '02/2018',
                    active: 'active-3',
                    role: 'internship',
                    work: 'content-1'
                },
            ]
        }
    }

    render() {
        const actives = this.state.actives.map((data, index) => <ActivesChild
            key={index}
            startTime={data.startTime}
            endTime={data.endTime}
            active={data.active}
            role={data.role}
            work={data.work}/>)
        return (
            <div className="wrapper__component--actives">
                <h3 className="component__actives--title">{this.state.title}</h3>
                {actives}
            </div>
        );
    }
}

export default ActivesComponent;