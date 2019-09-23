import React, {Component} from 'react';
import './CertificateComponent.css';

class CertificateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'chứng chỉ',
            certificates: [
                {
                    time: '2014',
                    certificate: 'Cuộc thi thiết kế ứng dụng window giải khuyến khích'
                },
                {
                    time: '2015',
                    certificate: 'Karate đai xanh lục'
                },
                {
                    time: '2016',
                    certificate: 'Toiec 450'
                },

            ]
        }
    }


    render() {
        const listCertificate = this.state.certificates.map((data, index) => (
            <div className="d-flex component__certificate--content" key={index}>
                <div className="component__certificate--time">
                    <p>{data.time}</p>
                </div>
                <div className="component__certificate--work">
                    <p>{data.certificate}</p>
                </div>
            </div>
            )
        );

        return (
            <div className="wrapper__component--certificate">
                <h3>Chứng chỉ</h3>
                {listCertificate}
            </div>
        );
    }
}

export default CertificateComponent;