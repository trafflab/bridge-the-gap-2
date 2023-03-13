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
    time: '13:30-13:45',
    topic: 'The link is alive. Or how to successfully pour a google link',
    speaker: 'Maxim Khlebnikov',
    link: '#linkTo',
  },
  {
    time: '13:50-14:05',
    topic: 'Alternative sources of traffic in SEO',
    speaker: 'Mikhail Dmitriev',
    link: '#linkTo',
  },
  {
    time: '14:10-14:35',
    topic: 'From 0 to >2000 organic traffic per day in 4 months due to topical authority',
    speaker: 'Dmitriy',
    link: '#linkTo',
  },
  {
    time: '14:40-15:00',
    topic: 'Gambling app in the current realities',
    speaker: 'Yernazar Torebaev',
    link: '#linkTo',
  },
  {
    time: '15:00-15:30',
    topic: 'Switching to the European broadcast',
    speaker: 'Team',
    link: '#linkTo',
  },
  {
    time: '15:30-16:00',
    topic: 'Start of the European part of the conference',
    speaker: 'Maxime Sabrie',
    link: '#linkTo',
  },
  {
    time: '16:00-16:30',
    topic: 'How to achieve expolosive growth in the first years of your affiliate igaming business in the most concurrential GEOs',
    speaker: 'Cosmin',
    link: '#linkTo',
  },
  {
    time: '16:35-16:45',
    topic: 'Affiliate marketing agents: why it is mutually beneficial to work with affiliate networks',
    speaker: 'Dmitry Romanov',
    link: '#linkTo',
  },
  {
    time: '16:50-17:05',
    topic: 'How I Scaled to above 6 figures on a shoestring budget',
    speaker: 'Brent Jacobs',
    link: '#linkTo',
  },
  {
    time: '17:05-18:00',
    topic: 'Roundtable discussion, сonclusion & final thoughts',
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