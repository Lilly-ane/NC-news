
import styles from '../../styles/ArticleCard.module.css';

const ArticleCard = ({ article }) => {
  const { title, article_img_url, body, author, votes } = article;

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <img src={article_img_url} alt={title} className={styles.image} />
      <p>{body}</p>
      <p>Author: {author}</p>
      <p>Votes: {votes}</p>
    </div>
  );
};

export default ArticleCard;

