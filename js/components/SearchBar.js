import React, { Component } from 'react';

export default class SearchBar extends Component {
    onChangeHandler(e) {
        this.props.searchUsersByName(e.target.value);
    }
    
    render() {
        return(
            <input
            className='searchField' 
            onChange={ this.onChangeHandler.bind(this) } 
            type='text' 
            placeholder='Search people by name...' />
        )
    }
}