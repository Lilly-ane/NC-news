import axios from "axios";


const API = axios.create({
  baseURL: 'https://news-be-oks3.onrender.com/api/', 

});

export const fetchArticles = () => {
  return API.get('/articles');
};