import React, {Component} from 'react';
import './ExperienceComponent.css';
import './ExperienceChild';
import ExperienceChild from "./ExperienceChild";

class ExperienceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'kinh nghiệm làm việc',
            experiences: [
                {
                    startTime: '06/2017',
                    endTime: '02/2018',
                    company: 'lung vang',
                    position: 'internship',
                    experience: 'content-1'
                },
                {
                    startTime: '03/2018',
                    endTime: '04/2018',
                    company: 'co-well asia',
                    position: 'internship',
                    experience: 'content-2'
                },
                {
                    startTime: '06/2019',
                    endTime: '08/2019',
                    company: 'be advance partner',
                    position: 'internship',
                    experience: 'content-2'
                }
            ]
        }
    }


    render() {
        const listExperience = this.state.experiences.map(
            (data, index) =>
                <ExperienceChild
                    key={index}
                    startTime={data.startTime}
                    endTime={data.endTime}
                    company={data.company}
                    position={data.position}
                    experience={data.experience}/>
        );
        return (
            <div className="wrapper__component--experience">
                <h3>kinh nghiệm làm việc</h3>
                {listExperience}
            </div>
        );
    }
}

export default ExperienceComponent;