import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutPage, MainPage } from './pages';
import ItemsPage from './pages/ItemsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/items' element={<ItemsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
