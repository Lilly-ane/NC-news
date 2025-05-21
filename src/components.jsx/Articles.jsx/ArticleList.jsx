import React, { useEffect, useState } from 'react'
import { fetchArticles } from '../../utils/api';
import './ArticleCard.module.css';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';


const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

  fetchArticles()
    .then((res) => {
    
      setArticles(res.data.articles);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setError('Failed to fetch articles.');
      setLoading(false);
    });
}, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.article_id}>
          <Link to={`/articles/${article.article_id}`}>
          <ArticleCard article={article}/>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList
