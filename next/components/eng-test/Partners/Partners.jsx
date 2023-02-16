import * as React from "react";
import * as styles from './Partners.module.css';
import partner from '../../../images/partners/1.png';

export default function Partners() {

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Info partners</h2>
      <ul className={styles.list}>
        <li className={styles.element}>
          <a target='_blank' href="https://ru.gbc-time.com"><img className={styles.img} src={partner} alt="partners" /></a>
        </li>
      </ul>
      <div className={styles.line} />
    </section>
  )
}