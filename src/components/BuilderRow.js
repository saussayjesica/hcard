import React, { Component } from 'react';
import './BuilderRow.css'

class BuilderRow extends Component {
  render() {
    return (
      <div className="BuilderRow">
        <section>
          <div>
            {this.props.labelColumnOne}
          </div>
          <div>
            {this.props.labelColumnTwo}
          </div>
        </section>
        <section>
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default BuilderRow;
