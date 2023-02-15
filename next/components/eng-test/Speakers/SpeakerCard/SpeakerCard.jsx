import * as React from "react";
import * as styles from './SpeakerCard.module.css';

// import Image from 'next/image';
import SpeakerCardIcon from './SpeakerCardIcon/SpeakerCardIcon';

export default function SpeakerCard({data: {
  photo,
  name,
  specialization,
  linkType,
  link,
  isActive=false,
  type
}}) {
  return (
    <article className={`${styles.card} ${type === 'ru' ? styles.isRu : styles.isEng} ${isActive ? styles.selected : ''}`}>
      <div className={styles.imageContainer}>
        {/* <Image
          src={photo}
          fill={true}
          quality={100}
        /> */}
        
        <img style={{width: '100%', height: '100%'}} src={photo} alt={name} />

      </div>
      <div className={styles.about}>
        
        <div className={styles.nameContainer}>
          <p className={styles.name}>{name}</p>
          {linkType &&  <SpeakerCardIcon link={link} type={linkType} />}
        </div>
        <p className={styles.specialization}>{specialization}</p>
      </div>
      
    </article>
  )
}