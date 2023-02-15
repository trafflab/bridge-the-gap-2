import * as React from "react";
import * as styles from './Header.module.css';

import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderBg from './HeaderBg/HeaderBg';
import logoImg from '../../../images/eng-test/logo-footer.svg';

// import TransitionAnimation from '@/components/ui/TransitionAnimation/TransitionAnimation';
// import ChangeLangButton from '@/components/ui/ChangeLangButton/ChangeLangButton';

import ChangeLangButton from "../../ui/ChangeLangButton/ChangeLangButton";
import BurgerButton from './BurgerButton/BurgerButton';

export default function Header() {
  return (
    <header className={styles.header}>
      <HeaderBg />
      <div className={styles.headerContent}>
        <div className={styles.navContainer}>
          <a href='#top'><img className={styles.logo} src={logoImg} alt="logo" /></a>
          <nav className={styles.nav}>
            <HeaderLogo />
            <ul className={styles.navList}>
              <li><a href='#concept' className={styles.link}>concept</a></li>
              <li><a href='#schedule' className={styles.link}>shedule</a></li>
              <li><a href='#speakers' className={styles.link}>speakers</a></li>
            </ul>
          </nav>
        </div>
        <div className={styles.burgerConatiner}>
          <BurgerButton />
        </div>

        <div className={styles.buttonsContainer}>
          <div className={styles.chengeLangButtonContainer}>
            <ChangeLangButton currentLang='eng' linkTo='/ru' />
          </div>
          <a href='#contacts' className={styles.regButton}>
            <div id='glow-animation' />
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </header>
  )
}