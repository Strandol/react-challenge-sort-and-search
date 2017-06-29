export function loadData(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        
        xhr.onreadystatechange = function() {
            if (this.readyState != 4) return;                
            this.status != 200 ? reject() : resolve(xhr.responseText);
        }
        
        xhr.send();
    });
};

export function searchUsersByName(value) {
    let searchedUsers = _.filter(this.state.users, (user) => {
        return toLowerCase(user.name).includes(toLowerCase(value));
    })
    
    this.setState({
        filteredUsers: searchedUsers,
        selectedUser: searchedUsers[0]
    })
}

function toLowerCase(str) {
    return str.toLocaleLowerCase();
}

export function selectUser(userData) {
    this.setState({
        selectedUser: userData
    })
}

export function sortUsers(property) {
    let sortedData = _.sortBy(this.state.filteredUsers, (user) => {
        return user[property];
    })
    
    if (this.state.isSortedByInc) {
        this.setState({
            filteredUsers: _.reverse(sortedData),
            isSortedByInc: false,
            selectedUser: sortedData[0]
        })
    } else {
        this.setState({
            filteredUsers: sortedData,
            isSortedByInc: true,
            selectedUser: sortedData[0]
        })
    }
}