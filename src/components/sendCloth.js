import React from 'react';
import axios from 'axios';

 const baseUrl = "https://api.mytaylor.org/"
//const baseUrl = "http://localhost:2000/"
const clothUrl = baseUrl + "cloth";

export class SendCloth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      nameFile: ''
    }
  }

  render() {
    return <div>
      <div>
        Cloth Name:  <input type="text" onChange={this.onChangeNameHandler} />
      </div>
      <div>
        <input type="file" name="file" onChange={this.onChangeFileHandler} />
        <button type="button" onClick={this.onClickHandler}>Upload</button>
      </div>
    </div>
  }

  onChangeNameHandler = event => {
    this.setState({
      nameFile: event.target.value
    })
  }

  onChangeFileHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  onClickHandler = () => {
    var data = new FormData()
    data.append('file', this.state.selectedFile);
    data.append('name', this.state.nameFile);
    axios.post(clothUrl, data, {
    // receive two  parameters endpoint url ,form data
    }).then(res => { // then print response status
      console.log('cloth sending' + res.statusText)
    })
  }
}