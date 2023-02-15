import * as React from "react";
import * as styles from './TrafflabLogo.module.css';
import logoImg from '../../../../images/trafflab-logo.svg'
export default function TrafflabLogo() {

  return (
    <a target='_blank' href='https://trafflab.com/' className={styles.container}>
      <span>Powered by</span>
      <img src={logoImg} alt="trafflab logo" />
    </a>
  )
}