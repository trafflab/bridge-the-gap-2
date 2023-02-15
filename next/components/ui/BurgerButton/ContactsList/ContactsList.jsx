import styles from './ContactsList.module.css';

export default function ContactsList() {
  return (
    <ul className={styles.list}>
      <li>
        <a target='_blank' className={styles.link} href='https://facebook.com/' >
          <img src="/img-ru/icon/facebook.svg" alt="facebook" className={styles.icon}/>
          <div />
        </a>
      </li>

      <li>
        <a target='_blank' className={styles.link} href='https://instagram.com/bridgethegap.conf?igshid=YmMyMTA2M2Y=' >
          <img src="/img-ru/icon/inst.svg" alt="instagram" className={styles.icon}/>
          <div />
        </a>
      </li>

      <li>
        <a target='_blank' className={styles.link} href='https://www.youtube.com/channel/UCtLCIlvVplpsHd98ir7Qj2Q' >
          <img id="iconYT" src="/img-ru/icon/youtube.svg" alt="youtube" className={styles.icon}/>
          <div />
        </a>
      </li>

      <li>
        <a target='_blank' className={styles.link} href='https://t.me/bridgethegap_conf' >
          <img src="/img-ru/icon/tg.svg" alt="telegram" className={styles.icon}/>
          <div />
        </a>
      </li>

      <li>
        <a target='_blank' className={styles.link} href='https://twitter.com/bridgethegconf' >
          <img id="iconTW" src="/img-ru/icon/twitter.svg" alt="twitter" className={styles.icon}/>
          <div />
        </a>
      </li>
    </ul>
  )
}