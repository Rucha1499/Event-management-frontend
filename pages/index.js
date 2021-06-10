import Head from 'next/head';
import { useState, useEffect } from 'react';
import EventCard from '../components/EventCard/index';
import Navbar from '../components/Navbar/index';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://event-planner-json-server.herokuapp.com/eventData')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Home page</title>
      </Head>
      <Navbar appName="Event Planner" page="" />
      <div className={styles.mainTitle}>
        Welcome to Event Planner!📝
      </div>
      <div className={styles.description}>
        We help you organize awesome events! Find everything you want for your event to rock.
        Start Exploring!
      </div>
      <div className={styles.cardContainer}>
        {data ? data.map((eventType) => (
          <EventCard
            key={eventType.id}
            eventName={eventType.eventName}
            description={eventType.description}
            link={eventType.link}
          />
        )) : 'Loading...'}
      </div>
    </div>
  );
};

export default HomePage;
