import Head from 'next/head';
import ProductCardsHolder from '../components/ProductCardsHolder/index';
import Navbar from '../components/Navbar/index';
import cakeData from '../data/birthdayPartyData/cake';
import decorationData from '../data/birthdayPartyData/decoration';
import returnGiftData from '../data/birthdayPartyData/returnGift';
import styles from '../styles/Home.module.css';

const BirthdayPartyPage = () => (
  <div className={styles.mainContainerContent}>
    <Head>
      <title>
        Birthday
      </title>
    </Head>
    <Navbar appName="Event Planner" page="Birthday" />
    <ProductCardsHolder title="Birthday Cakes" data={cakeData} />
    <ProductCardsHolder title="Birthday Decoration" data={decorationData} />
    <ProductCardsHolder title="Return Gift" data={returnGiftData} />
  </div>
);

export default BirthdayPartyPage;
