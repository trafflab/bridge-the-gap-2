import * as React from "react";
import * as styles from './Concept.module.css';

import starImg from '../../../images/ru-test/star.png';
import sphereImg from '../../../images/ru-test/sphere.png';
import atombImg from '../../../images/ru-test/atom.png';

export default function Concept() {
  return (
    <section id='concept' className={styles.concept}>
      <h2 className={styles.title}>Концепция</h2>
      <p className={styles.subtitle}>Мир давно не стоит на месте. Поляризация - новая тенденция,но сегодня мы объединились во имя единства</p>
      <ul className={styles.articlesList}>
        <li>
          <article className={styles.article}>
            <span className={styles.tag}>#1</span>
            <h3 className={styles.articleTitle}>Объединение экспертов</h3>
            <p className={styles.articleText}>Для поддержки сообщества индустрии трафика и аффилиатного маркетинга в нише гемблинг.</p>
          </article>
          <div id='star' className={styles.image}>
            <img style={{width: '100%', height: '100%'}} src={starImg} alt="blomb" />
          </div>
        </li>
        <li>
          <article className={styles.article}>
            <span className={styles.tag}>#2</span>
            <h3 className={styles.articleTitle}>Мир давно не стоит на месте</h3>
            <p className={styles.articleText}>В нашей индустрии все меняется каждый день - мы понимаем это! Поэтому мы позвали только тех спикеров, которые лидируют за счет опережения трендов</p>
          </article>
          <div id='sphere' className={styles.image}>
            <img style={{width: '100%', height: '100%'}} src={sphereImg} alt="blomb" />
          </div>
        </li>
        <li>
          <article className={styles.article}>
            <span className={styles.tag}>#3</span>
            <h3 className={styles.articleTitle}>Наш опыт -<br /> твои результаты</h3>
            <p className={styles.articleText}>Четкие кейсы с тестами для понимания, что сегодня приносит профит, а что давно не работает. Bridge tha gap, don't rely on yesterday's guides</p>
          </article>
          <div id='atom' className={styles.image}>
            <img style={{width: '100%', height: '100%'}} src={atombImg} alt="blomb" />
          </div>

        </li>
      </ul>
    </section>
  )
}