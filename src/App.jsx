import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topics from './components.jsx/Topics'
import Homepage from './Pages.jsx/Homepage'
import ArticlePage from './Pages.jsx/ArticlePage'
import UserPage from './Pages.jsx/UserPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

