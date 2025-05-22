
import Homepage from './pages/Homepage';
import ArticlePage from './pages/ArticlePage';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
<Navbar/>
<Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/articles" element={<Homepage />} />
    <Route path="/articles/:article_id" element={<ArticlePage />} />
</Routes>
</>
  );
}

export default App

