import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


const SearchUser = (props) => {
    const [searchUser, setSearchUser] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const [searchColumns, setSearchColumns] = useState('');
    const searchOptions = {
        FirstName: 'FirstName',
        LastName: 'LastName',
        Email: 'Email',
        PhoneNumber: 'Phone'
    }

    const searchColumnHandler = (event) => {
        console.log(event.target.value);
        switch (event.target.value) {
            case 'firstName':
                setPlaceholder('Enter FirstName to search..');
                setSearchColumns('firstName');
                break;
            case 'lastName':
                setPlaceholder('Enter LastName to search..');
                setSearchColumns('lastName');
                break;
            case 'email':
                console.log(event.target.value);
                setPlaceholder('Enter email to search..');
                setSearchColumns('email');
                break;
            case 'phone':
                console.log(event.target.value);
                setPlaceholder('Enter phone number to search..');
                setSearchColumns('phone');
                break;
            default :
            console.log(event.target.value);
                setPlaceholder('Enter to search..');
        }
    }


    const searchUserDataHandler = (event) => {
        console.log('in search user handler',event.target.value);
        setSearchUser(event.target.value);
        props.searchUser(event.target.value.toLowerCase(),searchColumns);
    }

    return (
        <form className='input-group mb-3'>
            <div className=' form-group mx-2'>
                <select name='search_columns' className='form-control' onChange={searchColumnHandler}>
                    <option defaultValue>Select Search Column</option>
                    <option value='firstName'>{searchOptions.FirstName}</option>
                    <option value='lastName'>{searchOptions.LastName}</option>
                    <option value='email'>{searchOptions.Email}</option>
                    <option value='phone'>{searchOptions.PhoneNumber}</option>
                </select>
            </div>
            <div className=' form-group '>
                <input className='form-control'
                    type='text'
                    value={searchUser}
                    placeholder={placeholder}
                    onChange={searchUserDataHandler} />
            </div>
        </form>
    )

}

export default SearchUser;