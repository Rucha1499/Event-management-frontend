import Head from 'next/head';
import ProductCardsHolder from '../components/ProductCardsHolder/index';
import Navbar from '../components/Navbar/index';
import decorationData from '../data/anniversaryData/decoration';
import styles from '../styles/Home.module.css';

const reunionPage = () => (
  <div className={styles.mainContainerContent}>
    <Head>
      <title>Reunion</title>
    </Head>
    <Navbar appName="Event Planner" page="Reunion" />
    <ProductCardsHolder title="Decorations" data={decorationData} />
  </div>
);

export default reunionPage;
