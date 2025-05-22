import Homepage from "./pages/Homepage"; 
import ArticlePage from './pages/ArticlePage';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';




function App() {
  return (
    <>
<Header/>
<Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/articles" element={<Homepage />} />
    <Route path="/articles/:article_id" element={<ArticlePage />} />
</Routes>
</>
  );
}

export default App

