import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCommentsByArticleId } from '../../api';
import CommentCard from './CommentCard'; // ajustează calea dacă e în alt folder
import styles from '../../styles/CommentsList.module.css'; // dacă ai stiluri pentru container

const CommentsList = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCommentsByArticleId(article_id)
      .then((data) => {
        // dacă data vine ca { comment: [...] }
        const formatted = Array.isArray(data.comment) ? data.comment : data;
        setComments(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Could not fetch comments.');
        setLoading(false);
      });
  }, [article_id]);

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.commentsContainer}>
      <h3 className={styles.title}>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))
      )}
    </div>
  );
};

export default CommentsList;

