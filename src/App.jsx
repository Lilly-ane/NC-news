import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Topics from './components.jsx/Topics'
import Homepage from './Pages.jsx/Homepage'
import ArticlePage from './Pages.jsx/ArticlePage'
import ArticleList from './components.jsx/Articles.jsx/ArticleList'



function App() {
  return (

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<Homepage />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />

      </Routes>

  );
}

export default App

