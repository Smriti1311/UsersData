import { Modal } from 'react-bootstrap';
import React, { Component } from 'react';
import AddUserData from './AddUserData';
import { Button } from 'react-bootstrap';

class AddUser extends Component {
    state = {
        showModal: false
    }

    showModalHandler = () => {
        this.setState({showModal:true})
    }

    hideModalHandler = () => {
        this.setState({showModal:false})
    }

    render() {
        return (
            <div  className='float-right mb-3'>
            <Button onClick = {this.showModalHandler}>Add User</Button>
            <Modal show={this.state.showModal} onHide={this.hideModalHandler}>
                <Modal.Header closeButton>Add User Data</Modal.Header>
                <Modal.Body><AddUserData hideModal = {this.hideModalHandler} 
                                shouldUserDataUpdateHandler={this.props.shouldUserDataUpdateHandler}/></Modal.Body>
            </Modal>
            </div>

        )
    }
}

export default AddUser;