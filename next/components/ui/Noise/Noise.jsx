import styles from './Noise.module.css';

export default function Noise () {
  return (
    <div className={styles.noiseContainer}>
      <div className={styles.noise}></div>
      <svg className={styles.svg}>
        <filter id="noise">
          <feTurbulence id="turbulence">
            <animate
              attributeName="baseFrequency"
              dur="50s"
              values="0.9 0.9;0.8 0.8; 0.9 0.9"
              repeatCount="indefinite"
            ></animate>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="60"></feDisplacementMap>
        </filter>
    </svg>
    </div>
    
  )
}