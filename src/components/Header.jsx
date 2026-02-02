import Navbar from './Navbar';
import styles from '../styles/Header.module.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>NC News</h1>
      <Navbar />
      <Link to="/topics">Topics</Link>
    </header>
  );
};

export default Header;
