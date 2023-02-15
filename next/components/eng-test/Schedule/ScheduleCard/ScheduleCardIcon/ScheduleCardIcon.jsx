import * as React from "react";
import * as styles from './ScheduleCardIcon.module.css';
import arrawImg from '../../../../../images/icon/arrow.svg';

export default function ScheduleCardIcon() {
  return (
    <div id='icon' className={styles.icon}>
      <img src={arrawImg} alt="arrow icon" />
      <div id='glow'/>
    </div>
  )
}