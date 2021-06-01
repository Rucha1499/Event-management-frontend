import Link from 'next/link';
import styles from './productCard.module.css';

const ProductCard = ({
  productName, price, img, link,
}) => (
  <div className={styles.productCard}>
    <div className={styles.imageContainer}>
      <Link href={link}>
        {img}
      </Link>
      <div className={styles.productName}>
        {productName}
      </div>
      <div className={styles.price}>
        Price : Rs.
        {' '}
        {price}
      </div>
    </div>
  </div>
);

export default ProductCard;
