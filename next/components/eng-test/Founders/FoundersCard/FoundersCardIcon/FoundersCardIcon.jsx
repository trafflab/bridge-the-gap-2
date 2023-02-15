import * as React from "react";
import * as styles from './FoundersCardIcon.module.css';


export default function FoundersCardIcon({link, type}) {
  return (
    <div id='linkIcon' className={styles.iconContainer}>
      <a className={styles.link} href={link} >
        <img src={type} alt={type} className={styles.icon}/>
        <div />
      </a>
    </div>
  )
}