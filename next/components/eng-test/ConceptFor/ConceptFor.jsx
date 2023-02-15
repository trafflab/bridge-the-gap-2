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
      <h2 className={styles.title}>Bridge the gap is for you if you share our concept.</h2>
      <div className={styles.textsContainer}>
        <div className={styles.subtitleContainer}>
          <p className={styles.subtitle}>We are glad to see :</p>
          <ConceptForCard
            iconPath={webImg}
            text='Webmasters'
          />
        </div>
        <ul className={styles.articlesList}>
          <li><ConceptForCard
            iconPath={stormImg}
            text='Advertisers and brand representatives who works with webmasters'
          /></li>
          <li><ConceptForCard
            iconPath={starImg}
            text='Owners and affiliate program delegates'
          /></li>
          <li><ConceptForCard
            iconPath={loopImg}
            text='SEO specialists'
          /></li>
          <li><ConceptForCard
            iconPath={peoplesImg}
            text='Affiliates'
          /></li>
        </ul>
      </div>
    </section>
  )
}