import * as React from "react";
import * as styles from './HeaderLogo.module.css';
import logoImg from '../../../../images/eng-test/logo-footer.svg';

export default function HeaderLogo() {

  const [isShown, setIsShown] = React.useState(false);

  const handleScroll = () => {

    if (window.pageYOffset < 450) setIsShown(false)
    else setIsShown(true)
      
  }

  React.useEffect(() => {
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, {passive: true})
    return () => {
      window.removeEventListener('scroll', handleScroll, {passive: true})
    }
  }, [])
  return (
    <a href='#top'>
      <img
          className={`${styles.logo} ${isShown ? styles.isShown : ''}`}
          src={logoImg}
          alt="logo"
      />
    </a>
    

  )
}