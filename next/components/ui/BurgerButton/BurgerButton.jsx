'use client';

import styles from './BurgerButton.module.css';
import { useState } from 'react';
import ContactsList from './ContactsList/ContactsList';
import ChangeLangButton from '../ChangeLangButton/ChangeLangButton';
import TransitionAnimation from '../TransitionAnimation/TransitionAnimation';

export default function BurgerButton() {

  const [ isOpen, setIsOpen ] = useState(false);

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
              <img className={styles.logo} src="./img-ru/logo.svg" alt="site logo" />
              <ChangeLangButton
                linkTo='/eng'
                duration={1000}
                currentLang="ru"
                ><TransitionAnimation/></ChangeLangButton>
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