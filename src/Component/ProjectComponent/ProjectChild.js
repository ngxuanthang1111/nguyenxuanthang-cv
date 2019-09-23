import React, {Fragment, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "reactstrap/es/Table";

class ProjectChild extends Component {
    render() {
        return (
            <Fragment>
                <div className="d-flex component__project--first">
                    <div className="component__project--second">
                        <h5 className="component__project--title">
                            {this.props.nameProject}
                        </h5>
                        <p className="component__project--time">
                            {this.props.startTime}
                            <small> -</small>
                            {this.props.endTime}
                        </p>
                    </div>
                </div>
                <div className="d-flex component__project--wrapper-table">
                    <Table>
                        <tbody>
                        <tr>
                            <th>khách hàng</th>
                            <td>{this.props.customer}</td>
                        </tr>
                        <tr>
                            <th>mô tả dự án</th>
                            <td>{this.props.description}</td>
                        </tr>
                        <tr>
                            <th>số lượng thành viên</th>
                            <td>{this.props.quantity}</td>
                        </tr>
                        <tr>
                            <th>vị trí công việc</th>
                            <td>{this.props.position}</td>
                        </tr>
                        <tr>
                            <th>vai trò trong dự án</th>
                            <td>{this.props.role}</td>
                        </tr>
                        <tr>
                            <th>công nghệ sử dụng</th>
                            <td>{this.props.technologies}</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </Fragment>
        )
    }
};

export default ProjectChild;