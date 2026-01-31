import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByArticleId } from "../../api";
import CommentCard from "./CommentCard";
import styles from "../../styles/CommentsList.module.css";

const CommentsList = () => {
  const { article_id } = useParams();

  const [comments, setComments] = useState([]); // mereu array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchCommentsByArticleId(article_id)
      .then((data) => {
        // data ar trebui să fie array, dar protejăm cazul când vine obiect
        const list = Array.isArray(data) ? data : data?.comments ?? [];
        setComments(list);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not fetch comments.");
        setComments([]); // fallback sigur
      })
      .finally(() => {
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
