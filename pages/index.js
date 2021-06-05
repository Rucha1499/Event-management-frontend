import Head from 'next/head';
import EventCard from '../components/EventCard/index';
import Navbar from '../components/Navbar/index';
import styles from '../styles/Home.module.css';
import Data from '../data/eventData';

const HomePage = () => (
  <div className={styles.mainContainer}>
    <Head>
      <title>Home page</title>
    </Head>
    <Navbar appName="Event Planner" page="Home" />
    <div className={styles.mainTitle}>
      Welcome to Event Planner!📝
    </div>
    <div className={styles.description}>
      We help you organize awesome events! Explore what we have for you...
    </div>
    <div className={styles.cardContainer}>
      {Data.map((eventType) => (
        <EventCard
          key={eventType.id}
          eventName={eventType.eventName}
          description={eventType.description}
          link={eventType.link}
        />
      ))}
    </div>
  </div>
);

export default HomePage;
