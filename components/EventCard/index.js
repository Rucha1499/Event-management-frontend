import Link from 'next/link';
import styles from './eventCard.module.css';

const EventCard = ({ eventName, description, link }) => (
  <div className={styles.card}>
    <Link href={link}>
      <div className={styles.eventCardContent}>
        <div className={styles.title}>
          {eventName}
        </div>
        <div className={styles.description}>
          {description}
        </div>
      </div>
    </Link>
  </div>
);

export default EventCard;
