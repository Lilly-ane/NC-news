import React from 'react';
import './ArticleCard.css';
import { Link } from 'react-router-dom';

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <h2 className="article-title">{article.title}</h2>
      <p className="article-meta">
        By <span className="article-author">{article.author}</span> • {new Date(article.created_at).toLocaleDateString()}
      </p>
      <p className="article-votes">👍 {article.votes} votes</p>
      <Link to={`/articles/${article.article_id}`} className="view-button">
        View Article
      </Link>
    </div>
  );
}

export default ArticleCard;


