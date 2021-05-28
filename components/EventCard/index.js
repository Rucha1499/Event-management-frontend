import Link from 'next/link'
import styles from '../EventCard/eventCard.module.css'

const EventCard = ({eventName, description, link}) => {
    return (
        <div>
            <div className={styles.title}>
                <Link href={link}>
                    {eventName}
                </Link>
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    )
}

export default EventCard;