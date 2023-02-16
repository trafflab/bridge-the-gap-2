import * as React from "react";
import * as styles from './Opening.module.css';

import ContactsList from './ContactsList/ContactsList';
import LogoModel from './LogoModel';
import logo from '../../../images/ru-test/logo-ru.png';

export default function Opening() {
  return (
    <section className={styles.opening}>
      <h1 className={styles.title}>Gambling affiliate conferences</h1>
      <div className={styles.modelContainer}>
        <LogoModel />
        {/* <img alt='logo' src={logo} style={{width: '100%', height: '100%'}} /> */}

      </div>
      <time className={styles.date}>19 февраля</time>
      <div className={styles.line} />

      <ContactsList />
    </section>
  )
}