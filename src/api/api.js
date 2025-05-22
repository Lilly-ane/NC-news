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