import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleArticle } from "../api";

import CommentsList from "../components/Comments/CommentsList";
import VoteButtons from "../components/VoteButtons";
import ArticleCard from "../components/Articles/ArticleCard";

const ArticlePage = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchSingleArticle(article_id)
      .then((data) => {
        setArticle(data);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load article.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [article_id]);

  if (loading) return <p>Loading article...</p>;
  if (error) return <p>{error}</p>;
  if (!article) return <p>Article not found.</p>;

 return (
  <main className="article-container">
    <ArticleCard article={article} />

    <div className="article-actions">
      <VoteButtons articleId={article.article_id} initialVotes={article.votes} />
    </div>

    <CommentsList />

    <Link className="backLink" to="/articles">← Back to all articles</Link>
  </main>
);

};

export default ArticlePage;
