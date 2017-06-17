import React, { Component } from 'react'
import './HCardPreview.css'
import PreviewRow from './PreviewRow'

class HCardPreview extends Component {

  render(){
    let address = this.props.data.number + ' ' + this.props.data.street
    let region = this.props.data.suburb + ' ' + this.props.data.state
    return(
      <div className='HCardPreview'>
        <div>
          <div id='title'><span>hcard preview</span></div>
             <img src={this.props.data.avatar} alt='avatar' className="avatar" />
          <div id='header'>
            {this.props.data.name} {this.props.data.surname}
          </div>
          <div id='card'>
            <PreviewRow cardLabel='email' field={this.props.data.email} />
            <PreviewRow cardLabel='phone' field={this.props.data.phone} />
            <PreviewRow cardLabel='address' field={address}/>
            <PreviewRow cardLabel='' field={region}/>
            <div className='PreviewRow'>
              <section>
                <div>postcode</div>
                <div className='input'>{this.props.data.postcode}</div>
                <div>country</div>
                <div className='input' id='equalColumnWidth'>{this.props.data.country}</div>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HCardPreview
