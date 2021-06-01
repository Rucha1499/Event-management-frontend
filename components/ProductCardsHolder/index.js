import styles from './ProductCardsHolder.module.css';
import ProductCard from '../ProductCard/index';

const ProductCardsHolder = ({ title, data }) => (
  <div className={styles.mainContainer}>
    <div className={styles.title}>
      {title}
    </div>
    <div className={styles.cardsHolder}>
      {data.map((product) => (
        <ProductCard
          key={product.id}
          productName={product.productName}
          price={product.price}
          img={product.img}
          link={product.link}
        />
      ))}
    </div>
  </div>

);

export default ProductCardsHolder;
