import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "reactstrap/es/Table";
import './HeaderComponent.css'
class HeaderComponent extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center wrapper__component--header">
                <div className="wrapper__component--avatar">
                    <img src="/images/coder.png"
                         alt="coder.png"
                         className="avatar"
                    />
                </div>
                <div className="wrapper__component--infomation">
                    <div className="wrapper__component--top">
                        <h2>Nguyen Xuan Thang</h2>
                        <p>Vi tri ung tuyen ban mong muon</p>
                    </div>
                    <div className="wrapper__component--person-infomation">
                        <Table>
                            <tbody>
                            <tr>
                                <td className="label">Ngày sinh:</td>
                                <td>15/03/1998</td>
                            </tr>
                            <tr>
                                <td className="label">Giới tính:</td>
                                <td>Nam</td>
                            </tr>
                            <tr>
                                <td className="label">Điện thoại:</td>
                                <td>0704029058</td>
                            </tr>
                            <tr>
                                <td className="label">Email:</td>
                                <td>abcxyz@gmail.com</td>

                            </tr>
                            <tr>
                                <td className="label">Địa chỉ:</td>
                                <td>357 Vô Danh</td>

                            </tr>
                            <tr>
                                <td className="label">Website:</td>
                                <td>http://facebook.com</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;