import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "reactstrap/es/Table";
import './ProjectComponent.css';
class ProjectComponent extends Component {
    render() {
        return (
            <div className="wrapper__component--project">
                <h3>dự án</h3>
                <div className="d-flex component__project--first">
                    <div className="component__project--second">
                        <h5 className="component__project--title">Project 1</h5>
                        <p className="component__project--time">
                            (start<small> - </small>end)
                        </p>
                    </div>
                </div>
                <div className="d-flex component__project--wrapp-table">
                    <Table bordered>
                        <tbody>
                        <tr>
                            <th>khách hàng</th>
                            <td>ABCD</td>
                        </tr>
                        <tr>
                            <th>mô tả dự án</th>
                            <td>Web Appication giúp mọi người thiết kế bó theo ý riêng</td>
                        </tr>
                        <tr>
                            <th>số lượng thành viên</th>
                            <td>8</td>
                        </tr>
                        <tr>
                            <th>vị trí công việc</th>
                            <td>Lập trình viên</td>
                        </tr>
                        <tr>
                            <th>vai trò trong dự án</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>công nghệ sử dụng</th>
                            <td>the Bird</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
                <p className="component__project--copyright">
                    <small>@ topcv.vn</small>
                </p>
            </div>
        );
    }
}

export default ProjectComponent;