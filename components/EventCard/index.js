import Link from 'next/link';
import styles from './eventCard.module.css';

const EventCard = ({ eventName, description, link }) => (
  <div className={styles.card}>
    <div className={styles.title}>
      <Link href={link}>
        {eventName}
      </Link>
    </div>
    <div className={styles.description}>
      {description}
    </div>
  </div>
);

export default EventCard;
