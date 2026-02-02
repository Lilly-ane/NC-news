import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchTopics } from "../../api";
import styles from "../../styles/TopicsList.module.css";

export default function TopicsList() {
  const [topics, setTopics] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetchTopics()
      .then((data) => {

        const arr = Array.isArray(data) ? data : [];
        setTopics(arr);
      })
      .catch((e) => {
        console.error("fetchTopics error:", e);
        setErr("Could not load topics.");
        setTopics([]); // ✅ still array
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading topics…</p>;
  if (err) return <p className={styles.error}>{err}</p>;


  if (topics.length === 0) {
    return <p className={styles.error}>No topics found.</p>;
  }

  return (
    <nav aria-label="Topics" className={styles.wrapper}>
      <ul className={styles.list}>
        {topics.map((t) => (
          <li key={t.slug}>
            <NavLink
              to={`/topics/${t.slug}`}
              className={({ isActive }) =>
                isActive ? styles.topicActive : styles.topic
              }
            >
              <span className={styles.slug}>{t.slug}</span>
              <span className={styles.desc}>{t.description}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
