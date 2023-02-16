import * as React from "react";
import * as styles from '../../next/styles/page-eng.module.css'
import {
  Footer,
  Opening,
  Form,
  Concept,
  ConceptFor,
  Schedule,
  Speakers,
  Bubble,
  Founders,
  Header,
  OpeningGlow,
  Partners
  
} from '../../next/components/eng-test'
import favicon from '../../next/images/favicon.ico';
import Helmet from "react-helmet";
import { YMInitializer } from 'react-yandex-metrika';

export default function HomeEng() {
  React.useEffect(() => {
    localStorage.setItem('lang', 'eng');
  },[])
  return (
    <>
      <Helmet>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {/* <link rel="icon" href={favicon} /> */}

        <meta name="yandex-verification" content="c416b5e0522c5e6f" />
        <meta name="google-site-verification" content="nE11p0r3ETai6zzFlTcVft0AS6mSDcjwz7QbRFTitvY" />

        <meta name="author" content="Trafflab" />
        <title>Bridge The Gap International Conference, bringing together experts and specialists in the niche of affiliate gambling</title>
        <meta name="description" content="We are a conference that gathers SEO specialists, experts on paid traffic channels, creative entrepreneurs in the niche of affiliate gambling, the best speakers and practitioners of the international level." />

        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '856864205282797');
            fbq('track', 'PageView');          
        `}
        </script>
        <noscript>
          {`
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=856864205282797&ev=PageView&noscript=1"
          />
          `}
        </noscript>

      </Helmet>
    
      <div className={styles.base}>
        <Header />
        <div className={styles.page}>
          <main className={styles.main}>
            <Opening />
            <Form />
            <Concept />
            <ConceptFor />
            <Schedule />
            <Partners />
            <Speakers />
            <Founders />
          </main>
          <Footer />
          
          <Bubble />
        </div>
        <OpeningGlow />
      </div>
      <YMInitializer accounts={[92155774]} options={{webvisor: true}} version="2" />

    </>
  )
}
