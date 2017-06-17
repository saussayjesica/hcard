import React, { Component } from 'react';

class InputField extends Component {

  handleNewEntry = (event) => {
    this.props.onNewEntry(event.target.value, this.props.fieldType)
  }

  render() {
    return (
        <div>
          <textarea onChange={this.handleNewEntry}></textarea>
        </div>

    );
  }
}

export default InputField;
