import * as React from "react";
import * as styles from './ConceptFor.module.css';
import ConceptForCard from './ConceptForCard/ConceptForCard';

import webImg from '../../../images/icon/web.svg';
import stormImg from '../../../images/icon/storm.svg';
import starImg from '../../../images/icon/star.svg';
import loopImg from '../../../images/icon/loop.svg';
import peoplesImg from '../../../images/icon/peoples.svg';


export default function ConceptFor() {
  return (
    <section id='themes' className={styles.conceptFor}>
      <h2 className={styles.title}>Bridge the gap для тебя, если ты разделяешь нашу концепцию.</h2>
      <div className={styles.textsContainer}>
        <div className={styles.subtitleContainer}>
          <p className={styles.subtitle}>Мы рады видеть :</p>
          <ConceptForCard
            iconPath={webImg}
            text='Веб-мастеров'
          />
        </div>
        <ul className={styles.articlesList}>
          <li><ConceptForCard
            iconPath={stormImg}
            text='Рекламодателей и представителей брендов, которые работают с веб-мастерами'
          /></li>
          <li><ConceptForCard
            iconPath={starImg}
            text='Владельцев и представителей партнерских программ и агрегаторов офферов'
          /></li>
          <li><ConceptForCard
            iconPath={loopImg}
            text='SEO специалистов'
          /></li>
          <li><ConceptForCard
            iconPath={peoplesImg}
            text='Аффилиатов в целом'
          /></li>
        </ul>
      </div>
    </section>
  )
}