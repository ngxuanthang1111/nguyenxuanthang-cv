import React, {Component} from 'react';
import './SKillComponent.css';

class SkillsComponent extends Component {
    render() {
        return (
            <div className="wrapper__component--skill">
                <h3>kỹ năng</h3>
                <div className="d-flex component__skill--content">
                    <div className="component__skill--child">
                        <p>Skill 1</p>
                    </div>
                    <div className="component__skill--work">
                        <p>- Làm việc chăm chỉ, thật thà, trung thực</p>
                    </div>
                </div>
                <div className="d-flex component__skill--content">
                    <div className="component__skill--child">
                        <p>Skill 2</p>
                    </div>
                    <div className="component__skill--work">
                        <p>- Làm việc chăm chỉ, thật thà, trung thực</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SkillsComponent;