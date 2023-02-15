import * as React from "react";
import * as styles from './ContactsList.module.css';

import facebookImg from '../../../../../images/icon/facebook.svg';
import instImg from '../../../../../images/icon/inst.svg';
import youtubeImg from '../../../../../images/icon/youtube.svg';
import tgImg from '../../../../../images/icon/tg.svg';
import twitterImg from '../../../../../images/icon/twitter.svg';

export default function ContactsList() {
  return (
    <ul className={styles.list}>
      <li>
        <a target='_blank' className={styles.link} href='https://facebook.com/' >
          <img src={facebookImg} alt="facebook" className={styles.icon}/>
          <div />
        </a>
      </li>

      <li>
        <a target='_blank' className={styles.link} href='https://instagram.com/bridgethegap.conf?igshid=YmMyMTA2M2Y=' >
          <img src={instImg} alt="instagram" className={styles.icon}/>
          <div />
        </a>
      </li>

      <li>
        <a target='_blank' className={styles.link} href='https://www.youtube.com/channel/UCtLCIlvVplpsHd98ir7Qj2Q' >
          <img id="iconYT" src={youtubeImg} alt="youtube" className={styles.icon}/>
          <div />
        </a>
      </li>

      <li>
        <a target='_blank' className={styles.link} href='https://t.me/bridgethegap_conf' >
          <img src={tgImg} alt="telegram" className={styles.icon}/>
          <div />
        </a>
      </li>

      <li>
        <a target='_blank' className={styles.link} href='https://twitter.com/bridgethegconf' >
          <img id="iconTW" src={twitterImg} alt="twitter" className={styles.icon}/>
          <div />
        </a>
      </li>
    </ul>
  )
}


