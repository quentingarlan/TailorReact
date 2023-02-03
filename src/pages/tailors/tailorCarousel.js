import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import styles from "./carousel.module.scss"

export class TailorCarousel extends Component {
  render() {
    return (
      <Carousel dynamicHeight={true} className={styles.carouselCentered}>
        <div>
          <img src="/tailorPics/nurainy1.jpg" alt="Nurainy Inoussah at work" />
          <p className="legend">Nurainy Inoussah at work</p>
        </div>
        <div>
          <img src="/tailorPics/nurainy2.jpg" alt="Nurainy Inoussah at work" />
          <p className="legend">Nurainy Inoussah at work</p>
        </div>
      </Carousel>
    )
  }
}
