import React, { Component } from 'react';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';
import ToolBar from './components/ToolBar';
import SearchBar from './components/SearchBar';
import * as actions from './Actions';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            isSortedByInc: false,
            selectedUser: null,
            filteredUsers: []
        }
        
        actions.loadData('data.json')
        .then((data) => {
            let usersData = JSON.parse(data);            
            this.setState({        
                users: usersData,
                selectedUser: usersData[0],
                filteredUsers: usersData
            }) 
        })
    }
    
    render() {
        return (
            <div>
                <SearchBar searchUsersByName={ actions.searchUsersByName.bind(this) } />
                <ToolBar sortUsers={ actions.sortUsers.bind(this) } />
                <ActiveUser selectedUser={ this.state.selectedUser } />
                <div className='tableWrapper'>
                    <UserList 
                      selectUser={ actions.selectUser.bind(this) } 
                      users={ this.state.filteredUsers } 
                    />
                </div>
            </div>
        );
    }
}
