import React, {Component} from 'react';
import './ProjectComponent.css';
import ProjectChild from "./ProjectChild";

class ProjectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'dự án',
            projects: [
                {
                    nameProject: 'project-1',
                    startTime: '123',
                    endTime: '5123',
                    customer: 'abc',
                    description: 'abcxyz',
                    quantity: '9',
                    position: 'dev',
                    role: 'front-end',
                    technologies: 'nodejs, reactjs, git, mockAPI,...'
                },
                {
                    nameProject: 'project-2',
                    startTime: '123',
                    endTime: '5123',
                    customer: 'abc',
                    description: 'abcxyz',
                    quantity: '9',
                    position: 'dev',
                    role: 'front-end',
                    technologies: 'nodejs, reactjs, git, mockAPI,...'
                },
            ]
        }
    }

    render() {
        const listProject = this.state.projects.map((data, index) =>
             <ProjectChild
                 key={index}
                 nameProject = {data.nameProject}
                 startTime = {data.startTime}
                 endTime={data.endTime}
                 customer={data.customer}
                 description={data.description}
                 quantity={data.quantity}
                 position={data.position}
                 role={data.role}
                 technologies={data.technologies}
             />
        );

        return (
            <div className="wrapper__component--project">
                <h3>{this.state.title}</h3>
                {listProject}
                <p className="component__project--copyright">
                    <small>@ topcv.vn</small>
                </p>
            </div>
        );
    }
}

export default ProjectComponent;