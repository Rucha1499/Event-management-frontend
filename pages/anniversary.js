import ProductCardsHolder from '../components/ProductCardsHolder/index';
import Navbar from '../components/Navbar/index';
import cakeData from '../data/anniversaryData/CakeData';
// import decorationData from '../data/anniversaryData/decoration';
import styles from '../styles/Home.module.css';

const anniversaryPage = () => (
  <div className={styles.mainContainerContent}>
    <Navbar appName="Event Planner" page="Anniversary" />
    <ProductCardsHolder title="Anniversary Cakes" data={cakeData} />
  </div>
);

export default anniversaryPage;
