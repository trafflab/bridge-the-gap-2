import * as React from "react";
import * as styles from './SpeakerCardIcon.module.css';

export default function SpeakerCardIcon({link, type}) {
  return (
    <div id='linkIcon' className={styles.iconContainer}>
      <a className={styles.link} href={link} >
        <img src={type} alt={type} className={styles.icon}/>
        <div />
      </a>
    </div>
  )
}