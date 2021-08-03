import React, { Component } from 'react';
import { FormControl, FormGroup, FormLabel, Form, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import validate from 'validate.js';

class AddUserData extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    }

    constraints = {
        firstName: {
            presence: true,
            length: {
                minimum: 4,
                message: 'must be atleast 4 characters'
            }
        },
        lastName: {
            presence: true,
            length: {
                minimum: 4,
                message: 'must be atleast 4 characters'
            }
        },
        email: {
            email: {
                message: "doesn't look like a valid email"
            }
        }
    }

    setValueHandler = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        let result = this.validateItem(key, value);
        console.log(result);
        this.setState({ [key]: value });
    }

    validateItem = (key, value) => {
        let validateObj = {};
        validateObj[key] = value;
        let constraint = this.constraints[key]
        return validate(validateObj,{[key] :constraint});

    }

    submitDataHandler = (event) => {
        event.preventDefault();
        const userData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber
        }
        console.log(userData);
        axios.post('https://react-fceb0-default-rtdb.firebaseio.com/users.json', userData)
            .then(res => {
                console.log(res)
            })
        this.props.hideModal();
        this.props.shouldUserDataUpdateHandler();
    }

    render() {
        const { firstName, lastName, email, phoneNumber } = this.state;
        return (
            <Form onSubmit={this.submitDataHandler}>
                <FormGroup as={Row} className="mb-3">
                    <FormLabel>First Name</FormLabel>
                    <FormControl name='firstName' type='input' value={firstName} onChange={this.setValueHandler} />
                </FormGroup>
                <FormGroup as={Row} className="mb-3">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl name='lastName' type='input' value={lastName} onChange={this.setValueHandler} />
                </FormGroup>
                <FormGroup as={Row} className="mb-3">
                    <FormLabel>Email</FormLabel>
                    <FormControl name='email' type='input' value={email} onChange={this.setValueHandler} />
                </FormGroup>
                <FormGroup as={Row} className="mb-3">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl name='phoneNumber' type='input' value={phoneNumber} onChange={this.setValueHandler} />
                </FormGroup>
                <Button type='submit' disabled={!firstName || !lastName}>Submit</Button>
            </Form>

        )
    }
}

export default AddUserData;