import React from "react"
import axios from "axios"

const baseUrl = "https://api.ghanatailor.com/"
const lambdaUrl =
  "https://yyk3xec2lvtjukozwid3ddwj6i0kwvii.lambda-url.eu-central-1.on.aws/"
//const baseUrl = "http://localhost:2000/"
const clothUrl = baseUrl + "cloth"

export class SendCloth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFile: null,
      nameFile: "",
    }
  }

  render() {
    return (
      <div>
        <div>
          Cloth Name: <input type="text" onChange={this.onChangeNameHandler} />
        </div>
        <div>
          <input type="file" name="file" onChange={this.onChangeFileHandler} />
          <button type="button" onClick={this.onClickHandler}>
            Upload
          </button>
        </div>
      </div>
    )
  }

  onChangeNameHandler = (event) => {
    this.setState({
      nameFile: event.target.value,
    })
  }

  onChangeFileHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    })
  }

  onClickHandler = () => {
    var data = new FormData()
    const file = this.state.selectedFile
    const name = this.state.nameFile
    data.append("file", file)
    data.append("name", name)
    console.log("file", file)
    console.log("name", name)

    const reader = new FileReader()
    reader.onload = function (evt) {
      const metadata = `name: ${file.name}, type: ${file.type}, size: ${file.size}, contents:`
      const contents = evt.target.result
      console.log(metadata, contents)
    }
    reader.readAsDataURL(file)

    axios
      .post(lambdaUrl, data, {
        // receive two  parameters endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log("cloth sending " + res)
      })
  }
}
