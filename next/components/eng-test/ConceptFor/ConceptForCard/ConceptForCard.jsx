import * as React from "react";
import * as styles from './ConceptForCard.module.css';

export default function ConceptForCard({iconPath, text}) {
  return (
    <article className={styles.card}>
      <div className={styles.iconContainer}>
        <img
          src={iconPath}
          alt="icon"
          className={styles.icon}
        />
        <div />
      </div>
      <p className={styles.text}>{text}</p>
    </article>
  )
}