import ProductCardsHolder from '../components/ProductCardsHolder/index';
import cakeData from '../data/birthdayPartyData/cakeData';
import decorationData from '../data/birthdayPartyData/decoration';
import styles from '../styles/Home.module.css';

const BirthdayPartyPage = () => (
  <div className={styles.mainContainerContent}>
    <ProductCardsHolder title="Birthday Cakes" data={cakeData} />
    <ProductCardsHolder title="Birthday Decoration" data={decorationData} />
  </div>
);

export default BirthdayPartyPage;
