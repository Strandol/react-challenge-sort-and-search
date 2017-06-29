import React, { Component } from 'react';

export default class ActiveUser extends Component {
    buildImageRef(name) {
        return `./images/${name}.svg`;
    }
  
    render() {
        if (!this.props.selectedUser) {
            return(
                <h3 className='headerOfEmptyResult'>Nothing found...</h3>
            )
        }
        
        let imageRef = this.buildImageRef(this.props.selectedUser.animal);
        return(
            <div className='selectedUser'>
                <img className={'selectedUser__img ' + this.props.selectedUser.animal}
                    src={imageRef} 
                />
                <hr />
                <div className='selectedUser__name'>
                    <span>Name</span>
                    <span>{this.props.selectedUser.name}</span>                
                </div>
                <hr />
                <div className='selectedUser__phone'>
                    <span>Phone</span>
                    <span>{this.props.selectedUser.phone}</span>         
                </div>
                <hr />
                <div className='selectedUser__animal'>
                    <span>Animal</span>
                    <span>{this.props.selectedUser.animal}</span>      
                </div>        
                <p className='selectedUser__phrase'>
                    <b>Коронная фраза: </b><br />{this.props.selectedUser.phrase}
                </p>
            </div>
        )
    }
}