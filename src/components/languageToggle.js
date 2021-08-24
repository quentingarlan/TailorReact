import React from "react";
import styles from './languageToggle.module.scss';

const languageOptions = [
    { key: "English", text: "English", value: "en" },
    { key: "French", text: "French", value: "fr" }
];
const LanguageToggle = props => {

    const handleChange = (event, data) => {
        props.setLanguage(data.value);
    };

    return (
        <div>
            <img src="/frenchFlag.png" alt="french flag" className={styles.flagImage} onClick={() => handleChange('fr')} />
            <img src="/UkFlag.png" alt="english flag" className={styles.flagImage} onClick={() => handleChange('en')} />
        </div>
    );
};

export default LanguageToggle;