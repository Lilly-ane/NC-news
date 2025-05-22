import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSingleArticle } from '../api/api';
import SingleArticleCard from '../components/Articles/ArticleCard';


const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetchSingleArticle(article_id).then(setArticle);
  }, [article_id]);

  if (!article) return <p>Loading...</p>;

  return (
    <section>
    <SingleArticleCard article={article}/>
      <Link to="/articles">← Back to all articles</Link>
    </section>
  );
};

export default ArticlePage;
