import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchArticles } from "../../api";
import styles from "../../styles/ArticleList.module.css";

const SORT_OPTIONS = [
  { value: "created_at", label: "Date" },
  { value: "votes", label: "Votes" },
  { value: "comment_count", label: "Comments" },
  { value: "title", label: "Title" },
];

export default function ArticleList({ topic }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const sort_by = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchArticles({ topic, sort_by, order })
      .then((data) => setArticles(data))
      .catch(() => setError("Could not load articles."))
      .finally(() => setLoading(false));
  }, [topic, sort_by, order]);

  const handleSortChange = (e) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort_by", e.target.value);
    setSearchParams(params);
  };

  const toggleOrder = () => {
    const params = new URLSearchParams(searchParams);
    params.set("order", order === "asc" ? "desc" : "asc");
    setSearchParams(params);
  };

  if (loading) return <p>Loading articles…</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <section>
      <div className={styles.controls}>
        <label>
          Sort by{" "}
          <select value={sort_by} onChange={handleSortChange}>
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>

        <button type="button" onClick={toggleOrder}>
          Order: {order.toUpperCase()}
        </button>

        {topic && <span className={styles.topicBadge}>Topic: {topic}</span>}
      </div>

      <ul className={styles.list}>
        {articles.map((article) => (
          <li key={article.article_id} className={styles.item}>
            <Link to={`/articles/${article.article_id}`}>
              <h3>{article.title}</h3>
            </Link>
            <p className={styles.meta}>
              by {article.author} · votes {article.votes} · comments{" "}
              {article.comment_count}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
