import Homepage from "./pages/Homepage"; 
import ArticlePage from './pages/ArticlePage';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TopicsPage from "./pages/TopicsPage";
import TopicArticlesPage from "./pages/TopicArticlesPage";





function App() {
  return (
    <>
<Header/>
<Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/articles" element={<Homepage />} />
    <Route path="/articles/:article_id" element={<ArticlePage />} />
    <Route path="/topics" element={<TopicsPage />} />
<Route path="/topics/:topic_slug" element={<TopicArticlesPage />} />

    
</Routes>
</>
  );
}

export default App

