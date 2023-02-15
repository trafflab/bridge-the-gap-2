import * as React from "react";
import * as styles from './ScheduleCard.module.css';
import ScheduleCardIcon from './ScheduleCardIcon/ScheduleCardIcon';

export default function ScheduleCard({time, topic, speakerName, speakerLink}) {
  return (
    <article className={styles.card}>
      <p className={styles.time}>{time}</p>
      <div className={styles.about}>
        <h4 className={styles.topic}>{topic}</h4>
        <a className={styles.speakerContainer} href={speakerLink}>
          <ScheduleCardIcon />
          <p className={styles.name}>{speakerName}</p>
        </a>
      </div>
    </article>
  )
}