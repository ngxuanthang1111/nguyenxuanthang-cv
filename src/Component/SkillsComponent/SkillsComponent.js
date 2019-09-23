import React, {Component} from 'react';
import './SKillComponent.css';

class SkillsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'kỹ năng',
            skills: [
                {
                    skillName: 'Photoshop',
                    experience: 'asdawd'
                },
                {
                    skillName: 'HTML',
                    experience: 'asdawd'
                },
                {
                    skillName: 'CSS',
                    experience: 'asdawd'
                },
                {
                    skillName: 'Javascript',
                    experience: 'asdawd'
                },
                {
                    skillName: 'Research Myself',
                    experience: 'asdawd'
                },
                {
                    skillName: 'Teamwork',
                    experience: 'asdawd'
                }
            ]
        }
    }

    render() {
        const listSkill = this.state.skills.map((data,index)=>
            <div className="d-flex component__skill--content" key={index}>
                <div className="component__skill--child">
                    <p>{data.skillName}</p>
                </div>
                <div className="component__skill--work">
                    <p>{data.experience}</p>
                </div>
            </div>
        );
        return (
            <div className="wrapper__component--skill">
                <h3>{this.state.title}</h3>
                {listSkill}
            </div>
        );
    }
}

export default SkillsComponent;