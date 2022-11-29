import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
        <div className='item'>
            <img src={"./img/" + this.props.item.img} />
            <h2>{this.props.item.tytle}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}грн</b>
            <div className='add-to-card'>+</div>
        </div>
    )
  }
}

export default Item