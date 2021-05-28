import Head from 'next/head'
import EventCard from '../components/EventCard/index'
import styles from '../styles/Home.module.css'
import Data from '../data/eventData.js'

const HomePage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainTitle}>
        Welcome to Event Management Application!
      </div>
      <div className={styles.description}>
        We help you orangize awesome events! Explore what we have for you...
      </div>
      <div className={styles.cardContainer}>
        {Data.map((eventType) => (
          <EventCard eventName={eventType.eventName} description={eventType.description} link={eventType.link} />
        ))}
      </div>
    </div>
  )
}

export default HomePage;
