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
  OpeningGlow
} from '../../next/components/eng-test'
import favicon from '../../next/images/favicon.ico';
import Helmet from "react-helmet";
import { YMInitializer } from 'react-yandex-metrika';

export default function HomeEng() {

  return (
    <>
      <Helmet>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href={favicon} />

        <meta name="yandex-verification" content="c416b5e0522c5e6f" />
        <meta name="google-site-verification" content="nE11p0r3ETai6zzFlTcVft0AS6mSDcjwz7QbRFTitvY" />

        <meta name="author" content="Trafflab" />
        <title>Bridge The Gap International Conference, bringing together experts and specialists in the niche of affiliate gambling</title>
        <meta name="description" content="We are a conference that gathers SEO specialists, experts on paid traffic channels, creative entrepreneurs in the niche of affiliate gambling, the best speakers and practitioners of the international level." />
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
