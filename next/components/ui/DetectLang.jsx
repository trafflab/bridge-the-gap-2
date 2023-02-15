'use client';

import { useEffect, useState } from 'react';
import { checkLang } from '@/utils';
import { useRouter } from 'next/navigation';
import PageLoader from './PageLoader';

export default function DetectLang() {
  const [ lang, setLang ] = useState('')
  const router = useRouter();

  useEffect(() => {
    const lang = checkLang();
    setLang(lang)
    router.replace(`/${lang}`)
  }, [])
  
  return (
    <PageLoader />
  )
}