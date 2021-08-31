import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './carousel.module.scss';

export class GhanaCarousel extends Component {
    render() {
        return (
            <Carousel dynamicHeight={true} className={styles.carouselCentered}>
                <div>
                    <img src="/ghanaCloth.jpg" alt="ghana cloth"/>
                    <p className="legend">Accra Merchant</p>
                </div>
                <div>
                    <img src="/ghanaStreet1.jpg" alt="ghana street"/>
                    <p className="legend">Nima street</p>
                </div>
                <div>
                    <img src="/ghanaStreet2.jpg" alt="ghana Street cloth"/>
                    <p className="legend">Cloth</p>
                </div>
            </Carousel>
        );
    }
}