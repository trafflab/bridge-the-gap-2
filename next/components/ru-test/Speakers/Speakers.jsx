import * as React from "react";
import * as styles from './Speakers.module.css';

import SpeakerCard from './SpeakerCard/SpeakerCard';

import img1 from '../../../images/speakers/1.jpg';
import img2 from '../../../images/speakers/2.jpg';
import img3 from '../../../images/speakers/3.jpg';
import img4 from '../../../images/speakers/4.jpg';
import img5 from '../../../images/speakers/5.jpg';
import img6 from '../../../images/speakers/6.jpg';
import img7 from '../../../images/speakers/7.jpg';
import img8 from '../../../images/speakers/8.jpg';
import img9 from '../../../images/speakers/9.jpg';

import img13 from '../../../images/speakers/13.jpg';
import img14 from '../../../images/speakers/14.jpg';

import img15 from '../../../images/speakers/15.jpg';
import img16 from '../../../images/speakers/16.jpg';


import tgIcon from '../../../images/icon/tg.svg'
import facebookIcon from '../../../images/icon/facebook.svg'
import webIcon from '../../../images/icon/web.svg'
import instIcon from '../../../images/icon/inst.svg'



const speakersData = [
  {//
    photo: img1,
    name: 'Михаил Дмитриев',
    specialization: 'Веб-мастер. SEO - специалист',
    linkType: false,
    link: 'https://instagram.com/permvillain?igshid=YmMyMTA2M2Y=',
    type: 'ru',
  },
  {
    photo: img5,
    name: 'Dmitriy',
    specialization: 'веб-мастер, SEO - специалист',
    linkType: webIcon,
    link: 'https://www.linkedin.com/in/miromind/',
    type: 'ru',
  },
  {
    photo: img7,
    name: 'Максим Хлебников',
    specialization: 'Овнер Traffic Dojo',
    linkType: instIcon,
    link: 'https://www.instagram.com/permvillain/',
    type: 'ru',
  },
  {
    photo: img9,
    name: 'Cosmin',
    specialization: 'CEO at FirstByte Media',
    linkType: webIcon,
    link: 'https://www.linkedin.com/in/cmesenschi1/',
    type: 'eng',
  },
  {
    photo: img13,
    name: 'Brent Jacobs',
    specialization: 'Owner of multiple niche specific SEO agencies',
    linkType: webIcon,
    link: 'https://www.linkedin.com/',
    type: 'eng',
  },

  {
    photo: img15,
    name: 'Ерназар Торебаев',
    specialization: 'Mobile TechLead, Android Developer',
    linkType: false,
    link: '',
    type: 'ru',
  },
  {
    photo: img16,
    name: 'Dmitry Romanov',
    specialization: 'Head of sales Trafflab',
    linkType: webIcon,
    link: 'https://trafflab.com/en',
    type: 'eng',
  },
]
export default function Speakers() {
  return (
    <section id='speakers' className={styles.speakers}>
      <h2 className={styles.title}>Спикеры</h2>
      {/* <p className={styles.subtitle}>Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</p> */}
      <ul className={styles.list}>
        {
          speakersData.map((speakerData, index) => (
            <li key={index}><SpeakerCard data={speakerData}/></li>
          ))
        }
      </ul>
    </section>
  )
}