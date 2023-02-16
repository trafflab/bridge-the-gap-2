import React, { useEffect } from "react";
import { navigate } from "gatsby";

import Helmet from "react-helmet";
import PageLoader from "../../next/components/ui/PageLoader";

const getRedirectLanguage = () => {

  if (typeof navigator === `undefined`) {
    return "en";
  }

  const lang = navigator && navigator.language && navigator.language.split("-")[0];
  if (!lang) return "eng";

  switch (lang) {
    case "en":
      return "eng";
    case "ru":
      return "ru";
    default:
      return "eng";
  }
};

export default function IndexPage() {

  useEffect(() => {
    let urlLang
    let savedLang = localStorage.getItem('lang');

    if (savedLang) urlLang = savedLang
    else {
      urlLang = getRedirectLanguage();
      localStorage.setItem('lang', urlLang);
      
    }
    
    navigate(`/${urlLang}`, {replace: true})

  }, []);

  return (
    <>
      <Helmet>
        <meta name="yandex-verification" content="c416b5e0522c5e6f" />
        <meta name="google-site-verification" content="nE11p0r3ETai6zzFlTcVft0AS6mSDcjwz7QbRFTitvY" />
      </Helmet>
      <PageLoader />
    </>
  ) 
};
