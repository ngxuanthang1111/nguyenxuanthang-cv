import React, {Component} from 'react';
import './EducationComponent.css';

class EducationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "học vấn",
            startTime: '09/2014',
            endTime: '06/2018',
            university: 'Duy Tan University',
            major: 'Software Technology',
            gpa: '3.2'
        }
    }

    render() {
        return (
            <div className="wrapper__component--education">
                <h3 className="component__education--title">học vấn</h3>
                <div className="d-flex component__education--content">
                    <div className="component__education--time">
                        <p>{this.state.startTime} <span>-</span> {this.state.endTime}</p>
                    </div>
                    <div className="component__education--result">
                        <ul>
                            <li>{this.state.university}</li>
                            <li>Chuyên ngành: {this.state.major}</li>
                            <li>GPA: {this.state.gpa}/4</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default EducationComponent;