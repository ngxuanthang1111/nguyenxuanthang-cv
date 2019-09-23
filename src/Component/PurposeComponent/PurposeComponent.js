import React, {Component} from 'react';
import './PurposeComponent.css';

class PurposeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "mục đích nghề nghiệp",
            content : "Áp dụng những kiến thức tự học và thực tập tại các công ty, cùng 1 số kỹ năng có chút hiểu và liên quan đến chuyên ngành sẽ trở thành developer webapplication, mang cái nhìn trực quan và tạo sức hút đến khách hàng, tạo nên sự hài lòng của khách hàng khi sử dụng trang web  "
        }
    }
    render() {
        return (
            <div className="wrapper__component--purpose">
                <h3>{this.state.title}</h3>
                <p>{this.state.content}</p>
            </div>
        );
    }
}

export default PurposeComponent;