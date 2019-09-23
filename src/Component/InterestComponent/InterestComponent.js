import React, {Component} from 'react';
import './InterestComponent.css'
class InterestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interests: [
                {
                    type: 'games',
                    content: 'liên minh, chiến thuật, defense city,...'
                },
                {
                    type: 'sports',
                    content: 'đá banh, võ thuật, street-workout...'
                },
                {
                    type: 'films',
                    content: 'anima japanse, hành động, viễn tưởng, võ thuật...'
                },

            ]
        }
    }

    render() {
        const listInterests = this.state.interests.map((data, index) => (
            <div className="d-flex component__interest--content" key={index}>
                <div className="component__interest--child">
                    <p>{data.type}</p>
                </div>
                <div className="component__interest--work">
                    <p>{data.content}</p>
                </div>
            </div>
        ));
        return (
            <div className="wrapper__component--interest">
                <h3>sở thích</h3>
                {listInterests}
            </div>
        );
    }
}

export default InterestComponent;