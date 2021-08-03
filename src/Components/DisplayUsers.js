import React, { Component } from 'react';

class DisplayUsers extends Component {
    render() {
        const { searchText, displayUserData } = this.props;

        const displayUsersData = displayUserData.map((user) => {
            if (searchText) {
                if (user.firstName.toLowerCase().indexOf(searchText) === -1
                    && user.lastName.toLowerCase().indexOf(searchText) === -1
                    && user.phoneNumber.indexOf(searchText) === -1
                    && user.email.indexOf(searchText) === -1) {
                    return null;
                }
                else {
                    return (<tr key={user.userId}>
                        <th scope='row'>
                            {user.userId}
                        </th>
                        <td className='text-capitalize'>
                            {user.firstName}
                        </td>
                        <td className='text-capitalize'>
                            {user.lastName}
                        </td>
                        <td>
                            {user.phoneNumber}
                        </td>
                        <td>
                            {user.email}
                        </td>
                    </tr>);
                }
            }
            else {
                return (<tr key={user.userId}>
                    <th scope='row'>
                        {user.userId}
                    </th>
                    <td className='text-capitalize'>
                        {user.firstName}
                    </td>
                    <td className='text-capitalize'>
                        {user.lastName}
                    </td>
                    <td>
                        {user.phoneNumber}
                    </td>
                    <td>
                        {user.email}
                    </td>
                </tr>);
            }
        }
        )

        let displayData = [];
        if (this.props.displayUserData) {

            displayData = <table className='table table-striped table-bordered table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>
                            Id
                        </th>
                        <th scope='col'>
                            First Name
                        </th>
                        <th scope='col'>
                            Last Name
                        </th>
                        <th scope='col'>
                            Phone Number
                        </th>
                        <th scope='col'>
                            Email Address
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {displayUsersData}
                </tbody>
            </table>
        }
        return (
            <div>
                {displayData}
            </div>
        )
    }
}

export default DisplayUsers;