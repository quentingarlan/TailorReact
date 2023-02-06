import React from "react"
import styles from "./yourCloth.module.css"
import clothRegistry from "./cloths.json"
// const baseUrl = "https://api.ghanatailor.com/"
// const baseUrl = "http://localhost:2000/"
// const clothUrl = baseUrl + "cloth/"
const imgPath = "/cloth/"

export class YourCloths extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cloths: this.fetchCloths(),
    }
  }

  render() {
    if (this.state.cloths.length > 0) {
      // this.props.onClothLoad(this.state.cloths[0]);
      return (
        <div>
          <div>Tissus</div>
          {this.state.cloths.map((cloth) => (
            <img
              className={styles.img}
              alt={cloth}
              id={cloth}
              key={cloth}
              value={cloth}
              src={imgPath + cloth}
              width="100"
              height="100"
              onClick={(evt) => this.handleChange(evt, cloth)}
              onLoad={(evt) => this.handleLoad(evt, cloth)}
            />
          ))}
        </div>
      )
    } else {
      return <div></div>
    }
  }

  handleLoad(evt, val) {
    if (val === this.state.cloths[0]) {
      evt.target.className = styles.selectedImg
      this.props.onClothLoad(val)
    }
  }

  handleChange(evt, data) {
    this.unSelectAllElements(evt.target.parentElement)
    if (evt.target.className === styles.img) {
      evt.target.className = styles.selectedImg
    } else {
      evt.target.className = styles.img
    }
    this.props.onClothChange(data)
  }

  unSelectAllElements(element) {
    element.childNodes.forEach((element) => {
      element.className = styles.img
    })
  }
  fetchCloths() {
    let clothList = []
    for (let x in clothRegistry) {
      try {
        clothList.push(clothRegistry[x])
      } catch (e) {
        console.log(e)
      }
    }
    return clothList
  }
}
