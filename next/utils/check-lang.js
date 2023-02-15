export default function checkLang( langToSet ) {

  if (langToSet) {
    localStorage.setItem('savedLang', langToSet)
    return langToSet
  }

  const localStorageLang = localStorage.getItem('savedLang');
  if (localStorageLang) return localStorageLang

  const browserLang = navigator.language.split('-')[0]
  if (browserLang === 'ru') return browserLang
  
  return 'eng'
}