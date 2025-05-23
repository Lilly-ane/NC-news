import axios from "axios";


const API = axios.create({
  baseURL: 'https://news-be-oks3.onrender.com/api/', 
  
});

export const fetchArticles = () => {
  return API.get('/articles');
};

export const fetchSingleArticle = (article_id) => {
  return API.get(`/articles/${article_id}`)
    .then((res) => res.data.article)
    .catch((err) => {
      console.error("Error fetching single article:", err);
    });
}

export const fetchCommentsByArticleId = (article_id) => {
  return API.get(`/articles/${article_id}/comments`)
    .then((res) => res.data.comment?.rows || [])
    .catch((err) => {
      console.error("Error fetching comments:", err);
      throw err; 
    });
};


export const patchArticleVotes = (articleId, change) => {
  return axios.patch(`/api/articles/${articleId}`, {
    inc_votes: change
  });
};
