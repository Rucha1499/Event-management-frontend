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
          alt="Cake"
          width={120}
          height={120}
        />
        <div className={styles.productName}>
          {productName}
        </div>
        <div className={styles.price}>
          Price: Rs.
          {' '}
          {price}
        </div>
        <div className={styles.button}>
          Buy now
        </div>
      </div>
    </Link>
  </div>
);

export default ProductCard;
