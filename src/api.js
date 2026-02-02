// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://news-be-oks3.onrender.com/api",
});

// ✅ TOPICS
export const fetchTopics = () =>
  API.get("/topics").then((res) => res.data.topics);


// ✅ ARTICLES (supports topic + sort + order)
// fetchArticles({ topic: "coding", sort_by: "votes", order: "desc" })
export const fetchArticles = ({ topic, sort_by, order } = {}) =>
  API.get("/articles", {
    params: {
      ...(topic ? { topic } : {}),
      ...(sort_by ? { sort_by } : {}),
      ...(order ? { order } : {}),
    },
  }).then((res) => res.data.articles);

// ✅ SINGLE ARTICLE
export const fetchSingleArticle = (article_id) =>
  API.get(`/articles/${article_id}`).then((res) => res.data.article);

// ✅ COMMENTS (expects: { comments: [...] })
export const fetchCommentsByArticleId = (article_id) =>
  API.get(`/articles/${article_id}/comments`).then((res) => res.data.comments);

// ✅ POST COMMENT
// (your backend earlier used { newComment: ... } so we return that)
export const postCommentForArticle = (article_id, username, body) =>
  API.post(`/articles/${article_id}/comments`, { username, body }).then(
    (res) => res.data.newComment
  );

// ✅ VOTES
export const patchArticleVotes = (article_id, inc_votes) =>
  API.patch(`/articles/${article_id}`, { inc_votes }).then((res) => res.data.article);

// ✅ DELETE COMMENT
export const deleteComment = (comment_id) => API.delete(`/comments/${comment_id}`);
