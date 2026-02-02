import { NavLink } from "react-router-dom";
import styles from "../../styles/Topic.module.css";

export default function Topics({ topic }) {
  return (
    <NavLink
      to={`/topics/${topic.slug}`}
      className={({ isActive }) => (isActive ? styles.active : styles.topic)}
      aria-label={`View articles for topic ${topic.slug}`}
    >
      <span className={styles.slug}>{topic.slug}</span>
      <span className={styles.desc}>{topic.description}</span>
    </NavLink>
  );
}
