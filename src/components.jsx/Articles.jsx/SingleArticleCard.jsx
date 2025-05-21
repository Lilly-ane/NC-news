import styles from './SingleArticleCard.module.css'

export default function SingleArticleCard({article}) {
    console.log(styles)
  return (
    <article className={styles["article-card"]}>
      <h2>{article.title}</h2>
      <p><strong>By:</strong> {article.author} | <strong>Date:</strong> {article.created_at}</p>
      <p><strong>Topic:</strong> {article.topic}</p>
      <p>{article.body}</p>
      <p><strong>Votes:</strong> {article.votes}</p>
    </article>
  )
}
