import styles from '../../styles/ArticleCard.module.css';

const ArticleCard = ({ article }) => {
  const { title, article_img_url, body, author, votes } = article;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <img src={article_img_url} alt={title} className={styles.image} />
      <p className={styles.body}>{body}</p>
      <p className={styles.author}>Author: {author}</p>
      <p className={styles.votes}>Votes: {votes ?? 0}</p>
    </div>
  );
};

export default ArticleCard;
