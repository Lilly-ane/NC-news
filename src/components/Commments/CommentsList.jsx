import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CommentsList = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  axios
    .get(`https://news-be-oks3.onrender.com/api/articles/${article_id}/comments`)
    .then((res) => {
      //console.log(res.data);
      if (Array.isArray(res.data.comment?.rows)) {
        setComments(res.data.comment.rows); 
      } else {
        setComments([]);
      }
      setLoading(false);
    })
    .catch((err) => {
      setError('Could not fetch comments.');
      setLoading(false);
    });
}, [article_id]);



  if (loading) return <p>Loading comments...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="comments-container">
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.comment_id} className="comment-card">
            <p><strong>{comment.author}</strong></p>
            <p>{comment.body}</p>
            <small>{new Date(comment.created_at).toLocaleDateString()}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentsList;
