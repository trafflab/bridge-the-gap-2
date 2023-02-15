import * as React from "react";
import * as styles from './HeaderBg.module.css';

export default function HeaderBg() {
  const [opacity, setOpacity] = React.useState(0);

  const handleScroll = () => {
    
    if (window.pageYOffset < 450) setOpacity(window.pageYOffset / 200);
    else setOpacity(1)
  }

  React.useEffect(() => {
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, {passive: true})
    return () => {
      window.removeEventListener('scroll', handleScroll, {passive: true})
    }
  }, [])

  return (
    <div
      className={styles.bg}
      style={{
        opacity: opacity 
      }}
    />
  )
}