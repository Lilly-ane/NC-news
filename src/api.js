import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:9092/api",
});

export const fetchArticles = () =>
  API.get("articles").then((res) => res.data.articles);


export const fetchSingleArticle = (article_id) => {
  return API.get(`articles/${article_id}`).then((res) => res.data.article);
};

export const fetchCommentsByArticleId = (article_id) => {
  return API.get(`articles/${article_id}/comments`).then((res) => res.data.comments);
};

export const postCommentForArticle = (article_id, username, body) => {
  return API.post(`articles/${article_id}/comments`, { username, body })
    .then((res) => res.data.newComment);
};

export const patchArticleVotes = (article_id, inc_votes) => {
  return API.patch(`articles/${article_id}`, { inc_votes })
    .then((res) => res.data.article);
};

export const deleteComment = (comment_id) => {
  return API.delete(`comments/${comment_id}`);
};
