import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogPost from './components/BlogPost';
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:postId" element={<BlogPost />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;