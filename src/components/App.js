import React, { Component } from 'react';
import './App.css';
import Dropzone from 'react-dropzone';
import request from 'superagent';

import InputField from './InputField'
import BuilderRow from './BuilderRow'
import Button from './Button'
import HCardPreview from './HCardPreview'

const CLOUDINARY_UPLOAD_PRESET = 'hcardAvatar';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dni6i2ixx/image/upload';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
          name: '',
          email: '',
          phone: '',
          number: '',
          street: '',
          suburb: '',
          state: '',
          postcode: '',
          country: '',
          avatar: './default-avatar.png',
      }
  }

  handleNewDetail = (entry, field) => {
    console.log(entry, field)
    this.setState({
      [field]: entry
    })
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
      let upload = request.post(CLOUDINARY_UPLOAD_URL)
                          .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                          .field('file', file);

      upload.end((err, response) => {
        if (err) {
          console.error(err);
        }

        if (response.body.secure_url !== '') {
          this.setState({
            avatar: response.body.secure_url
          });
        }
      });
    }

  render() {
    return (
      <div className='App'>
        <div className='HCardBuilder'>
          <h1>hCard Builder</h1>
          <h2>personal details</h2>
          <BuilderRow labelColumnOne='given name' labelColumnTwo='surname'>
            <InputField onNewEntry={this.handleNewDetail} fieldType='name'/>
            <InputField onNewEntry={this.handleNewDetail} fieldType='surname'/>
          </BuilderRow>
          <BuilderRow labelColumnOne='email' labelColumnTwo='phone'>
            <InputField onNewEntry={this.handleNewDetail} fieldType='email'/>
            <InputField onNewEntry={this.handleNewDetail} fieldType='phone'/>
          </BuilderRow>
          <h2>
            address
          </h2>
          <BuilderRow labelColumnOne='house name or #' labelColumnTwo='street'>
            <InputField onNewEntry={this.handleNewDetail} fieldType='number'/>
            <InputField onNewEntry={this.handleNewDetail} fieldType='street'/>
          </BuilderRow>
          <BuilderRow labelColumnOne='suburb' labelColumnTwo='state'>
            <InputField onNewEntry={this.handleNewDetail} fieldType='suburb'/>
            <InputField onNewEntry={this.handleNewDetail} fieldType='state'/>
          </BuilderRow>
          <BuilderRow labelColumnOne='postcode' labelColumnTwo='country'>
            <InputField onNewEntry={this.handleNewDetail} fieldType='postcode'/>
            <InputField onNewEntry={this.handleNewDetail} fieldType='country'/>
          </BuilderRow>
          <div className="BuilderRow">
            <section>
              <Button
                class='uploadAvatar'
                id='uploadAvatarBtn'
                text='Upload Avatar'/>
              <Dropzone
                multiple={false}
                accept="image/*"
                style={{}}
                onDrop={this.onImageDrop.bind(this)}>
                <Button
                  class='createCard'
                  id='createCardBtn'
                  text='Post to board'/>
              </Dropzone>
            </section>
          </div>
        </div>
        <HCardPreview data={this.state}/>
    </div>
    );
  }
}

export default App;
