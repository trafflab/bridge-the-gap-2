import * as React from "react";
import * as styles from './Footer.module.css';

import TrafflabLogo from './TrafflabLogo/TrafflabLogo';
import FooterContactsList from './FooterContactsList/FooterContactsList';
import logoImg from '../../../images/eng-test/logo-footer.svg'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.navContainer}>
        <img className={styles.logo} src={logoImg} alt="logo" />
        <nav className={styles.nav}>
          <ul className={styles.navList}>
          <li><a href='#concept' className={styles.link}>сoncept</a></li>
          <li><a href='#schedule' className={styles.link}>schedule</a></li>
          <li><a href='#speakers' className={styles.link}>speakers</a></li>
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