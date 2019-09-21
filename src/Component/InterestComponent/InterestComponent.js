import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Form, FormGroup, Input, Label} from 'reactstrap';

class InterestComponent extends Component {
    render() {
        return (
            <div>
                <h3>Interest</h3>
                <div className="d-flex">
                    <Form>
                        <FormGroup row>
                            <Label for="exampleText"
                                   sm={2}>Text Area</Label>
                            <Col sm={10}>
                                <Input type="textarea"
                                       name="text"
                                       id="exampleText"/>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}

export default InterestComponent;