import React from 'react';
import axios from 'axios';
import styles from './yourCloth.module.css';

const baseUrl = "https://api.mytaylor.org/";
//const baseUrl = "http://localhost:2000/"

const clothUrl = baseUrl + 'cloth/';
const imgUrl = baseUrl + 'images/cloth/';

export class YourCloths extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cloths: []
    }
    this.fetchCloths();
  }

  render() {
    if (this.state.cloths) {
      // this.props.onClothLoad(this.state.cloths[0]);
      return <div>
        <div>Tissus</div>
        {
          this.state.cloths.map(cloth => 
            <img className={styles.img} alt={cloth.fileId}
              id={cloth.fileId} key={cloth.fileId} value={cloth.fileId} src={imgUrl + cloth.fileName}
              width='100' height='100'
              onClick={evt => this.handleChange(evt, cloth.fileId)}
              onLoad={evt => this.handleLoad(evt, cloth.fileId)} />)
        }
      </div>
    } else {
      return <div></div>
    }
  }

  componentDidUpdate() {
    var firstElt = document.getElementById(this.state.cloths[0]);
    if (firstElt){
      this.unSelectAllElements(firstElt.parentElement);
      firstElt.className = styles.selectedImg;
    }
  }

  handleLoad(evt, val) {
    if (val === this.state.cloths[0].fileId) {
      evt.target.className = styles.selectedImg;
      this.props.onClothLoad(val);
    }
  }

  handleChange(evt, data) {
    this.unSelectAllElements(evt.target.parentElement);

    if (evt.target.className === styles.img) {
      evt.target.className = styles.selectedImg;
    } else {
      evt.target.className = styles.img;
    }
    this.props.onClothChange(data);
  }

  unSelectAllElements(element) {
    element.childNodes.forEach(element => {
      element.className = styles.img;
    });
  }

  async fetchCloths() {
    const asyncData = await axios.get(clothUrl);
    this.setState({
      cloths: asyncData.data
    });
  }
}