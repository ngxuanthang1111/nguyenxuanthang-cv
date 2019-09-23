import React, {Component} from 'react';
import './ActivesComponent.css';

class ActivesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className= "wrapper__component--actives">
                <h3 className="component__actives--title">Hoạt Động</h3>
                <div className="d-flex component__actives--content">
                    <div className="component__actives--time">
                        <p>start <span>-</span> end</p>
                    </div>
                    <div className= "component__actives--work">
                        <h4>tình nguyện</h4>
                        <small>Tình Nguyện Viên</small>
                        <p>- Làm việc chăm chỉ, thật thà, trung thực</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActivesComponent;