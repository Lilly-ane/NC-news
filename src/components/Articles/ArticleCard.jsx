import { Link } from 'react-router-dom';
import styles from '../../styles/ArticleCard.module.css';

const ArticleCard = ({ article, isPreview = false }) => {
  const {
    article_id,
    title,
    article_img_url,
    author,
    votes,
    body
  } = article;

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <img src={article_img_url} alt={title} className={styles.image} />

      <p>Author: {author}</p>

      {isPreview ? (
        <Link to={`/articles/${article_id}`} className={styles.link}>
          Read more →
        </Link>
      ) : (
        <>
          <p>{body}</p>
          <p>Votes: {votes}</p>
        </>
      )}
    </div>
  );
};

export default ArticleCard;
