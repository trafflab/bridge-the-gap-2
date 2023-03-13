import * as React from "react";
import * as styles from './Partners.module.css';
import partner1 from '../../../images/partners/1.png';
import partner2 from '../../../images/partners/2.png';
import partner3 from '../../../images/partners/3.png';
import partner4 from '../../../images/partners/4.png';
import partner5 from '../../../images/partners/5.png';
import partner6 from '../../../images/partners/6.png';
import partner7 from '../../../images/partners/7.png';
import partner8 from '../../../images/partners/8.png';
import partner9 from '../../../images/partners/9.png';
import partner10 from '../../../images/partners/10.png';


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

        <li id='partners-events'>
          <a target='_blank' href="https://cpa-events.ru"><img className={styles.img} src={partner7} alt="partners" /></a>
        </li>

        <li id='partners-mafia'>
          <a target='_blank' href="https://trafficmafia.net"><img className={styles.img} src={partner4} alt="partners" /></a>
        </li>

        <li id='partners-killa'>
          <a target='_blank' href="https://fb-killa.pro/"><img className={styles.img} src={partner8} alt="partners" /></a>
        </li>

        <li id='partners-cbc'>
          <a target='_blank' href="https://ru.gbc-time.com"><img className={styles.img} src={partner5} alt="partners" /></a>
        </li>
        <li id='partners-pro'>
          <a target='_blank' href="https://pro-babki.ru/sobytiya-dlya-manimejkerov-i-arbitrazhnikov"><img className={styles.img} src={partner9} alt="partners" /></a>
        </li>
        <li id='partners-fbcpa'>
          <a target='_blank' href="https://fbcpa.pro"><img className={styles.img} src={partner10} alt="partners" /></a>
        </li>
      </ul>
      <div className={styles.line} />
    </section>
  )
}