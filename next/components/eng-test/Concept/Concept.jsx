import * as React from "react";
import * as styles from './Concept.module.css';

import blombImg from '../../../images/eng-test/blomb.png';
import flowerImg from '../../../images/eng-test/flower.png';
import crossbImg from '../../../images/eng-test/cross.png';

export default function Concept() {
  return (
    <section id='concept' className={styles.concept}>
      <h2 className={styles.title}>Concept</h2>
      <p className={styles.subtitle}>Evolution and changes never stop. But today, we decided to unite for unity.</p>
      <ul className={styles.articlesList}>
        <li>
          <article className={styles.article}>
            <span className={styles.tag}>#1</span>
            <h3 className={styles.articleTitle}>United as a coalition</h3>
            <p className={styles.articleText}>To support the traffic and affiliate marketing community in iGaming industry</p>
          </article>
          <div id='blomb' className={styles.image}>
            <img style={{width: '100%', height: '100%'}} src={flowerImg} alt="blomb" />
          </div>
        </li>
        <li>
          <article className={styles.article}>
            <span className={styles.tag}>#2</span>
            <h3 className={styles.articleTitle}>Everything changes</h3>
            <p className={styles.articleText}>We understand that everything in our industry changes every day, so we called only those speakers who are ahead of the trends.</p>
          </article>
          <div id='flower' className={styles.image}>
            <img style={{width: '100%', height: '100%'}} src={blombImg} alt="blomb" />
          </div>
        </li>
        <li>
          <article className={styles.article}>
            <span className={styles.tag}>#3</span>
            <h3 className={styles.articleTitle}>Our experience - your results</h3>
            <p className={styles.articleText}>Case studies with tests to sort out what brings profit today and what doesn’t work for a long time</p>
          </article>
          <div id='cross' className={styles.image}>
            <img style={{width: '100%', height: '100%'}} src={crossbImg} alt="blomb" />
          </div>

        </li>
      </ul>
    </section>
  )
}