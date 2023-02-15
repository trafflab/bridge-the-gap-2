const sendFormToTg = (message) => {

  const t = '5933671270:AAGemFPu0fiasxZ8JzIz0I9XWFIqtQuClgY'
  const id = '-800307671'
  return fetch(`https://api.telegram.org/bot${t}/sendMessage?chat_id=${id}&parse_mode=html&text=${message}`, {
    method: 'GET'
  })
  .then((res) => res.json())
}
export default sendFormToTg;

// https://api.telegram.org/bot5933671270:AAGemFPu0fiasxZ8JzIz0I9XWFIqtQuClgY/sendMessage?chat_id=-800307671&parse_mode=html&text=$helloWorld