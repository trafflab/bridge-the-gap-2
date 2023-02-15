
import * as React from "react";
import * as styles from './FoundersCard.module.css';

import FoundersCardIcon from './FoundersCardIcon/FoundersCardIcon';

export default function FoundersCard({data: {
  photo,
  name,
  specialization,
  linkType,
  link,
  isActive=false
}}) {
  return (
    <article className={`${styles.card} ${isActive ? styles.selected : ''}`}>
      <div className={styles.imageContainer}>
        <img style={{width: '100%', height: '100%'}} src={photo} alt={name} />
      </div>
      <div className={styles.about}>
        
        <div className={styles.nameContainer}>
          <p className={styles.name}>{name}</p>
          {linkType &&  <FoundersCardIcon link={link} type={linkType} />}
        </div>
        <p className={styles.specialization}>{specialization}</p>
      </div>
      
    </article>
  )
}