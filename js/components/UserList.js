import React, { Component } from 'react';
import UserData from './UserList/UserData';
import _ from 'lodash';

export default class UserList extends Component {
    render() {      
        let usersList = _.map(this.props.users, (data) => {
            return <UserData selectUser={this.props.selectUser} data={data} />
        }) 
        
        return(
           <table className='usersTableInfo'>
              <thead>
              <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Phone</th>
              </tr>
              </thead>
              <tbody>
                  {usersList}
              </tbody>
           </table>
        )
    }
}