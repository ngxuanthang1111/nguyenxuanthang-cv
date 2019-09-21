import React, {Component} from 'react';

class ActivesComponent extends Component {
    render() {
        return (
            <div>
                <h3>Actives</h3>
                <div className="d-flex">
                    <div>
                        <p>start <span>-</span> end</p>
                    </div>
                    <div>
                        <h4>tình nguyện</h4>
                        <small>tình nguyện viên</small>
                        <p>làm việc chăm chỉ, thật thà, trung thực</p>
                    </div>
                </div>
                <div className="d-flex">
                    <div>
                        <p>start <span>-</span> end</p>
                    </div>
                    <div>
                        <h4>club karate</h4>
                        <small>học viên</small>
                        <p>làm việc chăm chỉ, thật thà, trung thực</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActivesComponent;