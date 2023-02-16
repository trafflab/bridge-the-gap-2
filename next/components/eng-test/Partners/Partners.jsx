import * as React from "react";
import * as styles from './Partners.module.css';
import partner1 from '../../../images/partners/1.png';
import partner2 from '../../../images/partners/2.png';
import partner3 from '../../../images/partners/3.png';
import partner4 from '../../../images/partners/4.png';
import partner5 from '../../../images/partners/5.png';
import partner6 from '../../../images/partners/6.png';


export default function Partners() {

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Info partners</h2>
      <ul className={styles.list}>
        <li id='partners-pirate'>
          <a target='_blank' href="https://piratecpa.net"><img className={styles.img} src={partner1} alt="ru.gbc-time.com" /></a>
        </li>
        <li id='partners-cpagram'>
          <a target='_blank' href="https://CPagram.ru"><img className={styles.img} src={partner2} alt="piratecpa.net" /></a>
        </li>
        <li id='partners-protraffic'>
          <a target='_blank' href="http://protraffic.com/?utm_source=bridgethegap"><img className={styles.img} src={partner3} alt="partners" /></a>
        </li>
        <li id='partners-mafia'>
          <a target='_blank' href="https://trafficmafia.net"><img className={styles.img} src={partner4} alt="partners" /></a>
        </li>
        <li id='partners-cbc'>
          <a target='_blank' href="https://ru.gbc-time.com"><img className={styles.img} src={partner5} alt="partners" /></a>
        </li>
        <li id='partners-pbn'>
          <a target='_blank' href="https://t.me/mypbn"><img className={styles.img} src={partner6} alt="partners" /></a>
        </li>
      </ul>
      <div className={styles.line} />
    </section>
  )
}