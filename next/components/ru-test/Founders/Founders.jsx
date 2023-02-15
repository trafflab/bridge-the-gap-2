import * as React from "react";
import * as styles from './Founders.module.css';

import FoundersCard from './FoundersCard/FoundersCard';
import img10 from '../../../images/speakers/10.jpg';
import img11 from '../../../images/speakers/11.jpg';
import img12 from '../../../images/speakers/12.jpg';

import tgIcon from '../../../images/icon/tg.svg'

const speakersData = [
  {
    photo: img10,
    name: 'Maxime Sabrie',
    specialization: 'CEO Sky Limit',
    linkType: tgIcon,
    link: 'https://t.me/affiliatediaries',
  },
  {
    photo: img11,
    name: 'Tamerlan Safiullin',
    specialization: 'CEO Trafflab cpa',
    linkType: tgIcon,
    link: 'https://t.me/tamikgdetraffic',
  },
  {
    photo: img12,
    name: 'Gail back',
    specialization: 'Author of the Telegram channel about SEO',
    linkType: tgIcon,
    link: 'https://t.me/Seoschnitsa',
  },
]
export default function Founders() {
  return (
    <section id='founders' className={styles.speakers}>
      <h2 className={styles.title}>Команда</h2>
      {/* <p className={styles.subtitle}>Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</p> */}
      <ul className={styles.list}>
        {
          speakersData.map((speakerData, index) => (
            <li key={index}><FoundersCard data={speakerData}/></li>
          ))
        }
      </ul>
    </section>
  )
}