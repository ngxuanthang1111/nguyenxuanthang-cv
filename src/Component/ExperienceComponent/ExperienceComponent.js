import React, {Component} from 'react';
import './ExperienceComponent.css';

class ExperienceComponent extends Component {
    render() {
        return (
            <div className="wrapper__component--experience">
                <h3>kinh nghiệm làm việc</h3>
                <div className="d-flex component__experience--company">
                    <div className="component__experience--time">
                        <p>start <span>-</span> end</p>
                    </div>
                    <div className="component__experience--work">
                        <h4>Công ty Lorem</h4>
                        <small>Internship</small>
                        <p>- It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExperienceComponent;