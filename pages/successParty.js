import Head from 'next/head';
import ProductCardsHolder from '../components/ProductCardsHolder/index';
import Navbar from '../components/Navbar/index';
import cakeData from '../data/birthdayPartyData/cake';
import styles from '../styles/Home.module.css';

const SuccessPartyPage = () => (
  <div className={styles.mainContainerContent}>
    <Head>
      <title>
        Success Party
      </title>
    </Head>
    <Navbar appName="Event Planner" page="Success Party" />
    <ProductCardsHolder title="Cakes" data={cakeData} />
  </div>
);

export default SuccessPartyPage;
