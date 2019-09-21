import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "reactstrap/es/Table";

class ProjectComponent extends Component {
    render() {
        return (
            <div>
                <h3>Skills</h3>
                <div className="d-flex">
                    <div>
                        <h4>Skill 1</h4>
                        <p>làm việc chăm chỉ, thật thà, trung thực</p>
                    </div>
                </div>
                <div className="d-flex">
                    <Table bordered>
                        <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                        <tr>
                            <td>Larry</td>
                            <td>the Bird</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
                <p>
                    <small>@ topcv.vn</small>
                </p>
            </div>
        );
    }
}

export default ProjectComponent;