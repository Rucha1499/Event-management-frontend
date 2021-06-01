// import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = ({ appName, page }) => (
  <div className={styles.navbarContainer}>
    <div className={styles.navbarContent}>
      <div className={styles.title}>
        {appName}
      </div>
      <div className={styles.title}>
        {page}
      </div>
    </div>
  </div>
);

export default Navbar;
