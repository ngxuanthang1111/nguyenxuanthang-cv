import React, {Component} from 'react';
import './EducationComponent.css';

class EducationComponent extends Component {
    render() {
        return (
            <div className="wrapper__component--education">
                <h3 className="component__education--title">học vấn</h3>
                <div className="d-flex component__education--content">
                    <div className="component__education--time">
                        <p>start <span>-</span> end</p>
                    </div>
                    <div className="component__education--result">
                        <ul>
                            <li>Đại Hoc ABC</li>
                            <li>Chuyên ngành: Demo Web</li>
                            <li>GPA: 3.8/4</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default EducationComponent;