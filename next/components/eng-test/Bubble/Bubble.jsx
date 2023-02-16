import * as React from "react";
import * as styles from './Bubble.module.css';

  const paths = [
    {
      // 0
      top: 581, //444 143
      left: 626,
      width: 200,
      height: 0,
      blur: 28,
      spread: 8,
      opacity: 40,
      duration: 500
    },
    {
      // 1
      top: 724,
      left: 701,
      width: 57,
      height: 5,
      blur: 28,
      spread: 8,
      opacity: 99,
      duration: 500
    },
    {
      // 2
      top: 880,
      left: 482,
      width: 70,
      height: 70,
      blur: 63,
      spread: 51,
      opacity: 40,
      duration: 800
    },
    {
      // 3
      top: 958,
      left: 159,
      width: 80,
      height: 80,
      blur: 63,
      spread: 60,
      opacity: 80,
      duration: 800
    },
    {
      // 4
      top: 1350,
      left: 620,
      width: 176,
      height: 80,
      blur: 120,
      spread: 38,
      opacity: 64,
      duration: 800
    },
    {
      //5
      top: 1786,
      left: 130,
      width: 276,
      height: 216,
      blur: 188,
      spread: 38,
      opacity: 95,
      duration: 800
    },
    {
      //6
      top: 2021,
      left: 769,
      width: 50,
      height: 50,
      blur: 104,
      spread: 50,
      opacity: 79,
      duration: 800
    },
    {
      //7
      top: 2519,
      left: 109,
      width: 200,
      height: 200,
      blur: 400,
      spread: 100,
      opacity: 50,
      duration: 800
    },
    {
      //8
      top: 3006,
      left: 985,
      width: 51,
      height: 51,
      blur: 128,
      spread: 71,
      opacity: 95,
      duration: 800
    },
    {
      //9
      top: 3474,
      left: 638,
      width: 150,
      height: 27,
      blur: 77,
      spread: 40,
      opacity: 95,
      duration: 800
    },
    {
      //10
      top: 3781,
      left: 134,
      width: 1150,
      height: 10,
      blur: 111,
      spread: 29,
      opacity: 60,
      duration: 800
    },
    {
      //11
      top: 6765,
      left: 134,
      width: 1150,
      height: 10,
      blur: 111,
      spread: 29,
      opacity: 60,
      duration: 4500
    },
    {
      //12
      top: 7665,
      left: 621,
      width: 197,
      height: 50,
      blur: 211,
      spread: 115,
      opacity: 54,
      duration: 800
    },
  ]

  const offsets = [5, 250, 450, 750, 1100, 1530, 1830, 2250, 2800, 3250, 3500, 6338];

  const pathsMobile = [
    {
      // 0
      top: 330,
      left: 109,
      width: 200,
      height: 0,
      blur: 28,
      spread: 8,
      opacity: 40,
      duration: 500
    },
    {
      // 1
      top: 330,
      left: 185,
      width: 57,
      height: 5,
      blur: 28,
      spread: 8,
      opacity: 99,
      duration: 500
    },
    {
      // 2
      top: 637,
      left: 382,
      width: 70,
      height: 70,
      blur: 63,
      spread: 51,
      opacity: 100,
      duration: 800
    },
    {
      // 3
      top: 1180,
      left: 159,
      width: 80,
      height: 38,
      blur: 63,
      spread: 60,
      opacity: 45,
      duration: 800
    },
    {
      // 4
      top: 1556,
      left: 359,
      width: 176,
      height: 180,
      blur: 169,
      spread: 38,
      opacity: 81,
      duration: 800
    },
    {
      //5
      top: 2404,
      left: 95,
      width: 76,
      height: 40,
      blur: 111,
      spread: 57,
      opacity: 80,
      duration: 800
    },
    {
      //6
      top: 3036,
      left: 109,
      width: 200,
      height: 0,
      blur: 63,
      spread: 45,
      opacity: 50,
      duration: 800
    },
    {
      //7
      top: 4590,
      left: 109,
      width: 200,
      height: 0,
      blur: 63,
      spread: 45,
      opacity: 50,
      duration: 4500
    },
    {
      //8
      top: 5904,
      left: 109,
      width: 200,
      height: 100,
      blur: 230,
      spread: 45,
      opacity: 48,
      duration: 800
    },
    {
      //9
      top: 5904,
      left: 109,
      width: 200,
      height: 100,
      blur: 230,
      spread: 45,
      opacity: 48,
      duration: 800
    },
    {
      //10
      top: 5904,
      left: 109,
      width: 200,
      height: 100,
      blur: 230,
      spread: 45,
      opacity: 48,
      duration: 800
    },
    {
      //11
      top: 5904,
      left: 109,
      width: 200,
      height: 100,
      blur: 230,
      spread: 45,
      opacity: 48,
      duration: 800
    },
    {
      //12
      top: 5904,
      left: 109,
      width: 200,
      height: 100,
      blur: 230,
      spread: 45,
      opacity: 48,
      duration: 800
    },
  ]
  // const offsetsMobile1 = [5, 230, 588, 900, 1420, 2118, 2350, 3000, 3500, 3500, 3500, 3500];
  const offsetsMobile = [5, 230, 588, 900, 1760, 2263, 2700, 4300, 4600, 4600, 4600, 4600];

  
export default function Bubble() {

  const [ position, setPosition ] = React.useState(0);
  const [ path, setPath ] = React.useState(paths)
  const [ currentOffsets, setCurrentOffsets ] = React.useState(offsets);

  const onScroll = () => {
    const offset = window.pageYOffset

    if (offset < currentOffsets[0]) {setPosition(0); return};
    if (offset >= currentOffsets[0] && offset < currentOffsets[1]) {setPosition(1); return};
    if (offset >= currentOffsets[1] && offset < currentOffsets[2]) {setPosition(2); return};
    if (offset >= currentOffsets[2] && offset < currentOffsets[3]) {setPosition(3); return};
    if (offset >= currentOffsets[3] && offset < currentOffsets[4]) {setPosition(4); return};
    if (offset >= currentOffsets[4] && offset < currentOffsets[5]) {setPosition(5); return};
    if (offset >= currentOffsets[5] && offset < currentOffsets[6]) {setPosition(6); return};
    if (offset >= currentOffsets[6] && offset < currentOffsets[7]) {setPosition(7); return};
    if (offset >= currentOffsets[7] && offset < currentOffsets[8]) {setPosition(8); return};
    if (offset >= currentOffsets[8] && offset < currentOffsets[9]) {setPosition(9); return};
    if (offset >= currentOffsets[9] && offset < currentOffsets[10]) {setPosition(10); return};
    if (offset >= currentOffsets[10] && offset < currentOffsets[11]) {setPosition(11); return};
    if (offset >= currentOffsets[11]) {setPosition(12); return};
  }

  React.useEffect(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => {
      window.removeEventListener('scroll', onScroll, {passive: true});
    }
  }, [currentOffsets[1]])

  React.useEffect(() => {
    const docHeight = document.body.scrollHeight
    console.log(docHeight);
    if (window.matchMedia('(max-width: 480px)').matches) {
      const referenceMobile = 8206;
      const ratioMobile = docHeight / referenceMobile
      setPath(pathsMobile)
      setCurrentOffsets(offsetsMobile.map(pos => pos * ratioMobile))

    } else {
      const reference = 9637
      const ratio = docHeight / reference
      setPath(paths)
      setCurrentOffsets(offsets.map(pos => pos * ratio))
    }

  }, [])

  return (
    <div 
    style={{
        top: `${path[position].top + 10000}rem`,
        left: `${ path[position].left + 10000}rem`,
        width: `${path[position].width}rem`,
        height: `${path[position].height}rem`,
        boxShadow: `-10000rem -10000rem ${path[position].blur}rem ${path[position].spread}rem rgba(252, 238, 10, ${path[position].opacity}%)`,
        transition: `${path[position].duration}ms ease-in all`

      }}
    className={styles.bubble}>
    </div>
  )
}