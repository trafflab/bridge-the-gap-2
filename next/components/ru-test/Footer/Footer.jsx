import * as React from "react";
import * as styles from './Footer.module.css';

import TrafflabLogo from './TrafflabLogo/TrafflabLogo';
import FooterContactsList from './FooterContactsList/FooterContactsList';
import logoImg from '../../../images/ru-test/logo.svg'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.navContainer}>
        <img className={styles.logo} src={logoImg} alt="logo" />
        <nav className={styles.nav}>
          <ul className={styles.navList}>
          <li><a href='#concept' className={styles.link}>концепция</a></li>
          <li><a href='#schedule' className={styles.link}>расписание</a></li>
          <li><a href='#speakers' className={styles.link}>спикеры</a></li>
          </ul>
        </nav>
      </div>
      <div className={styles.contactsContainer}>
        <TrafflabLogo />
        <FooterContactsList />
      </div>
    </footer>
  )
}