import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './carousel.module.scss';

export class GhanaCarousel extends Component {
    render() {
        return (
            <Carousel dynamicHeight={true} className={styles.carouselCentered}>
                <div>
                    <img src="/ghanaCloth.jpg" />
                    <p className="legend">Ghana cloth</p>
                </div>
                <div>
                    <img src="/ghanaStreet1.jpg" />
                    <p className="legend">Accra</p>
                </div>
                <div>
                    <img src="/ghanaStreet2.jpg" />
                    <p className="legend">Cloth</p>
                </div>
            </Carousel>
        );
    }
}