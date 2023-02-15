import styles from './TransitionAnimation.module.css';
import Noise from "../Noise/Noise"

export default function TransitionAnimation() {
  return (
    <div className={styles.wrapper}>
      <Noise />
    </div>
  )
}