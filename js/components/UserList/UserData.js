import React, { Component } from 'react';

export default class UserData extends Component {
    buildImageRef(name) {
        return `./images/${name}.svg`;
    }
    
    onClickHandler(e) {
        this.props.selectUser(this.props.data);
    }
    
    render() {
        let imageRef = this.buildImageRef(this.props.data.animal);
        return(
            <tr onClick={this.onClickHandler.bind(this)} className='user'>
                <td>
                    <img className='user__img' src={imageRef} alt={this.props.data.name} />
                    <span>Аватар пользователя</span>
                </td>
                <td>
                    <span className='user__name'>{this.props.data.name}</span>
                    <span>Полное имя</span>
                </td>
                <td>
                    <span className='user__age'>{this.props.data.age}</span>
                    <span>Возраст</span>
                </td>
                <td>
                    <span className='user__phone'>{this.props.data.phone}</span>
                    <span>Номер телефона</span>
                </td>
            </tr>
        )
    }
}