import { Html } from '@react-three/drei';
import styles from './CanvasLoader.module.css';

export default function CanvasLoader() {
  return (
    <Html>
      <div className={styles.loader}><div></div><div></div><div></div><div></div></div>
    </Html>
  )
}