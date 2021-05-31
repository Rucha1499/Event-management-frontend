import EventCard from '../components/EventCard/index';
import Navbar from '../components/Navbar/index';
import styles from '../styles/Home.module.css';
import Data from '../data/eventData';

const HomePage = () => (
  <div className={styles.mainContainer}>
    <Navbar />
    <div className={styles.mainTitle}>
      Welcome to Event Management Application!
    </div>
    <div className={styles.description}>
      We help you orangize awesome events! Explore what we have for you...
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
