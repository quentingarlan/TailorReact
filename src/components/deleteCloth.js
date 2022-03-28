import React from 'react';
import axios from 'axios';

const baseUrl = "http://api.ghanatailor.com/"
//const baseUrl = "http://localhost:2000/"
const clothUrl = baseUrl + "cloth";

export class DeleteCloth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFile: ''
    }
  }

  render() {
    return <div>
      <div>
        Cloth Name:  <input type="text" onChange={this.onChangeNameHandler} />
      </div>
      <div>
        <button type="button" onClick={this.onClickHandler}>Delete</button>
      </div>
    </div>
  }

  onChangeNameHandler = event => {
    this.setState({
      nameFile: event.target.value
    })
  }

  onClickHandler = () => {
    // var data = new FormData()
    // data.append('name', this.state.nameFile);
    console.log('this.state.nameFile', this.state.nameFile)
    axios.delete(clothUrl + '/' + this.state.nameFile, {
    // receive two  parameters endpoint url ,form data
    }).then(res => { // then print response status
      console.log('cloth removing' + res.statusText)
    })
  }
}