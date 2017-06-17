import React, { Component } from 'react';
//import './PreviewRow.css'

class PreviewRow extends Component {
  render() {
    return (
      <div className='PreviewRow'>
        <section>
          <div>{this.props.cardLabel}</div>
          <div className='input'>{this.props.field}</div>
        </section>
      </div>
    );
  }
}

export default PreviewRow;
