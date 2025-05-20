import React, { useEffect, useState } from 'react'
import { fetchArticles } from '../../utils/api';
import './ArticleCard.css';


const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetchArticles()
    .then((res) => {
      console.log(res.data.articles); 
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

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.article_id}>{article.title}</li>
      ))}
    </ul>
  );
};

export default ArticleList
