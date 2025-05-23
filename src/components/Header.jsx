import Navbar from './Navbar';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>NC News</h1>
      <Navbar />
    </header>
  );
};

export default Header;
