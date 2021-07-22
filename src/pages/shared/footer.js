import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <a
            href=""
            target="_blank"
            rel="noopener noreferrer">
            <img src="/clothes.svg" alt="tailor Logo" width="50" height="50" className="logo" />
          </a>
        </footer>
     );
}
 
export default Footer;