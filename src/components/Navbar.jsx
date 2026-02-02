import { Link, NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/articles">Articles</Link>
        </li>

        <li>
          <NavLink
            to="/topics"
            className={({ isActive }) =>
              isActive ? styles.active : undefined
            }
          >
            Topics
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

