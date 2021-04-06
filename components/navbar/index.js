import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const navbarContent = (title, url) => {
    const router = useRouter();
    const linkClasses = `${styles.link} ${router.pathname === url ? styles.active : ''}`;
  
    return (
      <Link href={url}>
        <p className={linkClasses}>{title}</p>
      </Link>
    );
  };

  const Navbar = () => {
    return (
      <div className={styles.navbar}>
        {navbarContent('Home', '/')}
        {navbarContent('Sign up', '/Signup')}
      </div>
    );
  };

  export default Navbar;
  