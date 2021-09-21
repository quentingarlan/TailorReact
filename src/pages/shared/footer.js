import React from 'react';
import styles from './footer.module.scss';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link to='/'>
                <img src="/clothes.svg" alt="tailor Logo" width="50" height="50" className="logo" />
            </Link>
        </footer>
    );
}

export default Footer;