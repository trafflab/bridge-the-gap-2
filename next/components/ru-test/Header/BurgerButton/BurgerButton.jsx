import * as React from "react";
import * as styles from './BurgerButton.module.css';

import ContactsList from './ContactsList/ContactsList';

import ChangeLangButton from '../../../ui/ChangeLangButton/ChangeLangButton'
// import TransitionAnimation from '@/components/ui/TransitionAnimation/TransitionAnimation';
import logoImg from '../../../../images/ru-test/logo.svg';

export default function BurgerButton() {

  const [ isOpen, setIsOpen ] = React.useState(false);

  const handleCloseModal = (evt) => {
    const elId = evt.target.id
    if (elId === 'navModal' || elId === 'navLink') setIsOpen(false)
  }

  return (
    <div className={styles.container}>

        <div
          id='navModal'
          onClick={handleCloseModal}
          className={`${styles.modalContainer} ${isOpen ? styles.isOpen : styles.isClose}`}
        >
          <section className={styles.modal}>
            <div className={styles.logoContainer}>
              <img className={styles.logo} src={logoImg} alt="site logo" />
              <ChangeLangButton currentLang='eng' linkTo="/ru" />
            </div>
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                <li><a id='navLink' href='#concept' className={styles.link}>концепция</a></li>
                <li><a id='navLink' href='#schedule' className={styles.link}>расписание</a></li>
                <li><a id='navLink' href='#speakers' className={styles.link}>спикеры</a></li>
              </ul>
            </nav>
            <ContactsList />
          </section>
        </div>

      <button
        onClick={() => setIsOpen(true)}
        className={styles.burger}
        id={isOpen ? 'burgerButtonIsOpen' : ''}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    
  )
}