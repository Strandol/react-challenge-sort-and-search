import React, { Component } from 'react';

export default class ToolBar extends Component {  
    onClickHandler(e) {
          switch (e.target.className) {
              case 'alphabetSort':
                  this.props.sortUsers('name');
                  break;
              case 'ageSort':
                  this.props.sortUsers('age');
                  break;
              default:
                  break;
        }
    }
  
    render() {
        return(
            <div onClick={this.onClickHandler.bind(this)}>
                <button className="alphabetSort">Sort by name</button>
                <button className="ageSort">Sort by age</button>
            </div>
        )
    }
}