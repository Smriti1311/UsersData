import React, { useState } from 'react';

const SearchUser = (props) => {
    const [searchUser, setSearchUser] = useState('');

    const searchUserDataHandler = (event) => {
        console.log('in search user handler');
        setSearchUser(event.target.value);
        props.searchUser(event.target.value.toLowerCase());
    }

    return (
        <div className='input-group mb-3'>
            <input className='form-control'
                type='text'
                value={searchUser}
                placeholder='Enter user to search..'
                onChange={searchUserDataHandler} />
        </div>
    )

}

export default SearchUser;