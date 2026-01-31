import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchArticles } from "../../api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const load = async (attempt = 1) => {
      try {
        setLoading(true);
        setError(null);

        const articlesData = await fetchArticles(); // <-- direct array
        if (!cancelled) setArticles(articlesData);
      } catch (err) {
        console.error(err);

        // Render free can be slow on first request
        if (!cancelled && attempt < 3) {
          setTimeout(() => load(attempt + 1), 3000);
        } else if (!cancelled) {
          setError("Backend is waking up (Render free). Please refresh in a few seconds.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <p>Loading articles…</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.article_id}>
          <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
