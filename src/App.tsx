// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './pages/BlogList';
import BlogDetails from './pages/BlogDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/posts/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
