import styles from "../../styles/ArticleCard.module.css";

const ArticleCard = ({ article }) => {
  const { title, article_img_url, body, author, votes, created_at, topic } = article;

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.meta}>
          {topic && <span>Topic: {topic}</span>}
          {created_at && <span>{new Date(created_at).toLocaleDateString()}</span>}
        </div>
      </div>

      {article_img_url && (
        <img src={article_img_url} alt={title} className={styles.image} />
      )}

      <div className={styles.content}>
        <p className={styles.body}>{body}</p>
        <p className={styles.author}>Author: {author}</p>
        <p className={styles.votes}>Votes: {votes ?? 0}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
