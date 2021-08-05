import React, { Component } from 'react';
import DisplayUsers from './DisplayUsers';
import SearchUser from './SearchUser';
import AddUser from './AddUser';
import axios from 'axios';

class MapIterator extends Component {
    state = {
        userData: [],
        searchText: '',
        searchColumns: '',
        newUserAdded: false
    }

    componentDidMount = () => {
        console.log('component did mount');
        axios.get('https://react-fceb0-default-rtdb.firebaseio.com/users.json')
            .then((userData) => {
                const fetchedUsers = [];
                let id = 0;
                for (let key in userData.data) {
                    id = id + 1;
                    fetchedUsers.push({
                        ...userData.data[key],
                        key: key,
                        userId: id
                    })
                }
                this.setState({ userData: fetchedUsers });
            })
    }

    componentDidUpdate() {
        console.log('component did update');
        if (this.state.newUserAdded) {
            console.log('component did update when new user added');
            axios.get('https://react-fceb0-default-rtdb.firebaseio.com/users.json')
                .then(userData => {
                    const fetchedUsers = [];
                    let id = 0;
                    for (let key in userData.data) {
                        id = id + 1;
                        fetchedUsers.push({
                            ...userData.data[key],
                            key: key,
                            userId: id
                        })
                    }
                    console.log(fetchedUsers);
                    this.setState({ userData: fetchedUsers, newUserAdded: false })
                })
        }
    }

    searchUserHandler = (searchText, searchColumns) => {
        console.log('searchText=', searchText, searchColumns);
        this.setState({
            searchText: searchText,
            searchColumns: searchColumns
        });
    }

    newUserAddedHandler = () => {
        console.log('new user added');
        this.setState({ newUserAdded: true });
    }

    render() {
        console.log('Map Iterator render', this.state.userData);
        console.log('newUserAdded', this.state.newUserAdded);
        return (
            <div className='container'>
                <h1> List of Users</h1>
                <SearchUser searchUser={this.searchUserHandler} />
                <AddUser newUserAdded={this.newUserAddedHandler} />
                <DisplayUsers displayUserData={this.state.userData}
                    searchText={this.state.searchText}
                    searchColumns={this.state.searchColumns} />

            </div>
        )
    }
}

export default MapIterator;