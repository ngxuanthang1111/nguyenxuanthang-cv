import React, {Component} from 'react';
import './CertificateComponent.css';
class CertificateComponent extends Component {
    render() {
        return (
            <div className="wrapper__component--certificate">
                <h3>Chứng chỉ</h3>
                <div className="d-flex component__certificate--content">
                    <div className= "component__certificate--time">
                        <p>start <span>-</span> end</p>
                    </div>
                    <div className="component__certificate--work">
                        <p>- Làm việc chăm chỉ, thật thà, trung thực</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CertificateComponent;