import * as React from "react";
import * as styles from '../../next/styles/page-ru.module.css'
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
} from '../../next/components/ru-test'
import favicon from '../../next/images/favicon.ico';
import Helmet from "react-helmet";
import { YMInitializer } from 'react-yandex-metrika';

export default function HomeRu() {

  React.useEffect(() => {
    localStorage.setItem('lang', 'ru');
  }, [])

  return (
    <>
      <Helmet>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {/* <link rel="icon" href={favicon} /> */}

        <meta name="yandex-verification" content="c416b5e0522c5e6f" />
        <meta name="google-site-verification" content="nE11p0r3ETai6zzFlTcVft0AS6mSDcjwz7QbRFTitvY" />

        <meta name="author" content="Trafflab" />
        <title>Международная конференция Bridge The Gap, объединяющая экспертов и специалистов в нише аффилиатного гемблинга</title>
        <meta name="description" content="Мы - конференция, которая собирает SEO специалистов, экспертов по платным каналам трафика, креативных предпринимателей в нише аффилиатного гемблинга, лучших спикеров и практиков международного уровня." />

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
