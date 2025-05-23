import React from 'react';
import styles from '../../styles/CommentCard.module.css'; // ajustează calea dacă e diferită

const CommentCard = ({ comment }) => {
  const { author, body, created_at } = comment;

  return (
    <div className={styles.commentCard}>
      <p className={styles.commentAuthor}>{author}</p>
      <p className={styles.commentBody}>{body}</p>
      <p className={styles.commentDate}>
        {new Date(created_at).toLocaleDateString()}
      </p>
    </div>
  );
};

export default CommentCard;
