import * as React from "react";
import * as styles from './ChangeLangButton.module.css';

import { Link } from "gatsby";

export default function ChangeLangButton({
    currentLang,
    linkTo,
  }) {

  return (
    <Link to={linkTo} className={styles.button}>
      <span
        className={`${styles.lang} ${currentLang === 'ru' ? styles.ru : styles.eng}`}
      >{currentLang === 'ru' ? 'ENG' : 'RU'}</span>
    </Link>
    
  )
}