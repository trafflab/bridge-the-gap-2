import styles from './NotReady.module.css'

export default function NotReady() {
  return (
    <main className={styles.main}>
      <h1 class={
        `${styles.hero} ${styles.glitch} ${styles.layers}`
      } data-text="engPage is coming soon, be ready...">
        <span>engPage is coming soon, be ready...</span>
      </h1>
    </main>
  )
}
