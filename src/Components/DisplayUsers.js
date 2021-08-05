import React, { Component } from 'react';

class DisplayUsers extends Component {
    render() {
        const { searchText, displayUserData, searchColumns } = this.props;
        const displayUsersData = displayUserData.map((user) => {
            if (searchText && searchColumns === 'firstName' && !user.firstName.toLowerCase().includes(searchText)){
                return;
            } 
            else  if (searchText && searchColumns === 'lastName' && !user.lastName.toLowerCase().includes(searchText)){
                return;
            }
            else  if (searchText && searchColumns === 'email' && !user.email.toLowerCase().includes(searchText)){
                return;
            }
            else  if (searchText && searchColumns === 'phone' && !user.phoneNumber.includes(searchText)){
                return;
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