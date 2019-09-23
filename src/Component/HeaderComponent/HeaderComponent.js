import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "reactstrap/es/Table";
import './HeaderComponent.css'
class HeaderComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            avatar : '/images/coder.png',
            fullName : 'nguyen xuan thang',
            position : 'fresher',
            birthDay : '11/11/1995',
            gender: true,
            numberPhone: '0772329839',
            email: 'ngxuanthang1111@gmail.com',
            address : '324 Pham Cu Luong',
            website: 'http://fb.com/ngxuanthang1111'
        }
    }
    render() {
        return (
            <div className="d-flex justify-content-center wrapper__component--header">
                <div className="wrapper__component--avatar">
                    <img src={this.state.avatar}
                         alt="coder.png"
                         className="avatar"
                    />
                </div>
                <div className="wrapper__component--infomation">
                    <div className="wrapper__component--top">
                        <h2>{this.state.fullName}</h2>
                        <p>{this.state.position}</p>
                    </div>
                    <div className="wrapper__component--person-infomation">
                        <Table>
                            <tbody>
                            <tr>
                                <td className="label">Ngày sinh:</td>
                                <td>{this.state.birthDay}</td>
                            </tr>
                            <tr>
                                <td className="label">Giới tính:</td>
                                <td>{this.state.gender ? "Nam" : "Nữ"}</td>
                            </tr>
                            <tr>
                                <td className="label">Điện thoại:</td>
                                <td>{this.state.numberPhone}</td>
                            </tr>
                            <tr>
                                <td className="label">Email:</td>
                                <td>{this.state.email}</td>

                            </tr>
                            <tr>
                                <td className="label">Địa chỉ:</td>
                                <td>{this.state.address}</td>

                            </tr>
                            <tr>
                                <td className="label">Website:</td>
                                <td>{this.state.website}</td>
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