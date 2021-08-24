import React from "react";
import styles from './languageToggle.module.scss';
import i18next from "i18next";

const LanguageToggle = () => {

    const handleChange = (data) => {
        i18next.changeLanguage(data, (err, t) => {
            if (err) return console.log('something went wrong loading', err);
            t('key'); // -> same as i18next.t
        });
    };

    return (
        <div>
            <img src="/frenchFlag.png" alt="french flag" className={styles.flagImage} onClick={() => handleChange('fr')} />
            <img src="/UkFlag.png" alt="english flag" className={styles.flagImage} onClick={() => handleChange('en')} />
        </div>
    );
};

export default LanguageToggle;