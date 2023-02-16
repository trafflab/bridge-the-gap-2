import * as React from "react";
import * as styles from './Schedule.module.css';
import ScheduleCard from './ScheduleCard/ScheduleCard';


const scheduleList = [
  {
    time: '13:00-13:30',
    topic: 'Conference kickoff and opening remarks',
    speaker: 'Tamerlan Safiullin',
    link: '#linkTo',
  },
  {
    time: '13:30-14:00',
    topic: 'Why SEOs are lazy as**oles or how to get into SEO-gambling from scratch. Personal experience',
    speaker: 'Sasha Usnul',
    link: '#linkTo',
  },
  {
    time: '14:00-14:30',
    topic: 'How I was offered three times to invest more than $50,000/month in gambling. And what came out of it',
    speaker: 'Nikolai Kodiy',
    link: '#linkTo',
  },
  {
    time: '14:30-15:00',
    topic: 'The link is alive. Or how to successfully pour a google link',
    speaker: 'Maxim Khlebnikov',
    link: '#linkTo',
  },
  {
    time: '15:00-15:30',
    topic: 'Alternative sources of traffic in SEO',
    speaker: 'Mikhail Dmitriev',
    link: '#linkTo',
  },
  {
    time: '15:30-16:00',
    topic: 'From 0 to >2000 organic traffic per day in 4 months due to topical authority',
    speaker: 'Dmitriy',
    link: '#linkTo',
  },
  {
    time: '16:00-16:30',
    topic: 'Switching to the European broadcast',
    speaker: 'Team',
    link: '#linkTo',
  },
  {
    time: '16:30-17:00',
    topic: 'Start of the European part of the conference',
    speaker: 'Maxime Sabrie',
    link: '#linkTo',
  },
  // {
  //   time: '17:00-17:30',
  //   topic: 'My path in affiliate marketing - many mistakes and 100+k per month in the end of the day',
  //   speaker: 'Craig Campbell',
  //   link: '#linkTo',
  // },
  // {
  //   time: '17:00-17:30',
  //   topic: 'How I tripled my traffic in 12 months by focusing on micro topics',
  //   speaker: 'Kasra Dash',
  //   link: '#linkTo',
  // },
  // {
  //   time: '18:00-18:30',
  //   topic: 'How hiring the right staff can make it or break it as an affiliate',
  //   speaker: 'Mads Singers',
  //   link: '#linkTo',
  // },
  {
    time: '17:00-17:30',
    topic: 'How to achieve expolosive growth in the first years of your affiliate igaming business in the most concurrential GEOs',
    speaker: 'Cosmin',
    link: '#linkTo',
  },
  {
    time: '17:30-18:00',
    topic: 'How I Scaled to above 6 figures on a shoestring budget',
    speaker: 'Brent Jacobs',
    link: '#linkTo',
  },
  {
    time: '18:00-18:30',
    topic: 'Conclusion & final thoughts',
    speaker: 'Team',
    link: '#linkTo',
  },
]

export default function Schedule() {
  
  return (
    <section id='schedule' className={styles.schedule}>
      <h2 className={styles.title}>Schedule</h2>
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