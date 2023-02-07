import React from "react"

const pantUrl = baseUrl + "pant"

export class YourPants extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pants: [],
    }
    // this.fetchPants();
  }

  // async fetchPants() {
  //   const asyncData = await axios.get(pantUrl);
  //   this.setState({
  //     pants: asyncData.data.rows
  //   });
  // }

  render() {
    if (this.state.pants) {
      return (
        <div>
          <div>Your pants</div>
          {this.state.pants.map((pant) => (
            <div key={pant.Id}>
              {" "}
              pant id {pant.Id} hipSize {pant.hipSize} crotchSize{" "}
              {pant.crotchSize}
            </div>
          ))}
        </div>
      )
    } else {
      return <div> </div>
    }
  }
}
