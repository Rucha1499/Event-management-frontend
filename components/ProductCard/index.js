import Link from 'next/link';
import Image from 'next/image';
import styles from './productCard.module.css';

const ProductCard = ({
  productName, price, img, link,
}) => (
  <div className={styles.productCard}>
    <Link href={link}>
      <div className={styles.imageContainer}>
        <Image
          src={img}
          alt="image"
          width={120}
          height={120}
        />
        <p className={styles.productName}>
          {productName}
        </p>
        <div className={styles.price}>
          Price: Rs.
          {' '}
          {price}
        </div>
        <p className={styles.button}>
          Buy now
        </p>
      </div>
    </Link>
  </div>
);

export default ProductCard;
