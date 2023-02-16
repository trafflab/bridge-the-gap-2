import * as React from "react";
import * as styles from './Schedule.module.css';
import ScheduleCard from './ScheduleCard/ScheduleCard';

const scheduleList = [
  {
    time: '13:00-13:30',
    topic: 'Старт конференции и вступительное слово',
    speaker: 'Тамерлан Сафиуллин',
    link: '#linkTo',
  },
  {
    time: '13:30-14:00',
    topic: 'Почему SEO-шники — ленивые жо*ы или как залететь в SEO-gambling с нуля. Личный опыт',
    speaker: 'Саша Уснул',
    link: '#linkTo',
  },
  {
    time: '14:00-14:30',
    topic: 'Как мне трижды предлагали инвестиции в гемблу на сумму больше 50 000$/мес. И что из этого вышло',
    speaker: 'Николай Кодий',
    link: '#linkTo',
  },
  {
    time: '14:30-15:00',
    topic: 'Линка жива. Или как успешно лить на ссылку с гугла',
    speaker: 'Максим Хлебников',
    link: '#linkTo',
  },
  {
    time: '15:00-15:30',
    topic: 'Альтернативные источники трафика в SEO',
    speaker: 'Михаил Дмитриев',
    link: '#linkTo',
  },
  {
    time: '15:30-16:00',
    topic: 'С 0 до >2000 органического трафика в день за 4 месяца за счёт topical authority',
    speaker: 'Dmitriy',
    link: '#linkTo',
  },
  {
    time: '16:00-16:30',
    topic: 'Переход на трансляцию англоязычных спикеров',
    speaker: 'Команда',
    link: '#linkTo',
  },
  {
    time: '16:30-17:00',
    topic: 'Start of the European part of the conference',
    speaker: 'Maxime Sabrie',
    link: '#linkTo',
  },
  {
    time: '17:00-17:30',
    topic: 'My path in affiliate marketing - many mistakes and 100+k per month in the end of the day',
    speaker: 'Craig Campbell',
    link: '#linkTo',
  },
  {
    time: '17:30-18:00',
    topic: 'How I tripled my traffic in 12 months by focusing on micro topics',
    speaker: 'Kasra Dash',
    link: '#linkTo',
  },
  {
    time: '18:00-18:30',
    topic: 'How hiring the right staff can make it or break it as an affiliate',
    speaker: 'Mads Singers',
    link: '#linkTo',
  },
  {
    time: '18:30-19:00',
    topic: 'How to achieve expolosive growth in the first years of your affiliate igaming business in the most concurrential GEOs',
    speaker: 'Cosmin',
    link: '#linkTo',
  },
  {
    time: '19:00-19:30',
    topic: 'How I Scaled to above 6 figures on a shoestring budget',
    speaker: 'Brent Jacobs',
    link: '#linkTo',
  },
  {
    time: '19:30-20:00',
    topic: 'Conclusion & final thoughts',
    speaker: 'Team',
    link: '#linkTo',
  },
]

export default function Schedule() {
  
  return (
    <section id='schedule' className={styles.schedule}>
      <h2 className={styles.title}>Расписание</h2>
      <ul className={styles.list}>
        
        {
          scheduleList.map((speech, index) => (
            <li key={index}>
              <ScheduleCard
                time={speech.time}
                topic={speech.topic}
                speakerName={speech.speaker}
                speakerLink={speech.link}
              />
            </li>
          ))
        }
      </ul>
    </section>
  )
}