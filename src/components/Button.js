import React, { Component } from 'react'

class Button extends Component {
  render(){
    return (
      <div className={this.props.class}>
        <button onClick={this.createNewMessage} id={this.props.id}>{this.props.text}</button>
      </div>
    )
  }
}

export default Button
