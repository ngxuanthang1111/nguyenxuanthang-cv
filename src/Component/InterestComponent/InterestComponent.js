import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Input from "reactstrap/es/Input";

class InterestComponent extends Component {
    render() {
        return (
            <div className="wrapper__component--interest">
                <h3>sở thích</h3>
                <div className="d-flex component__interest--content">
                    <Form>
                        <FormGroup>
                            <Input type="textarea"
                                   name="text"
                                   id="exampleText"
                                   cols={100}
                                   rows={2}
                            />
                        </FormGroup>
                    </Form>

                </div>
            </div>
        );
    }
}

export default InterestComponent;