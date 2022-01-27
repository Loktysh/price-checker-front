import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemInfo from './common/ItemInfo';
import { AboutPage, MainPage } from './pages';
import ItemsPage from './pages/ItemsPage';
import { LoginPage } from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import { SignupPage } from './pages/SignupPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Route>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products/:query' element={<ItemsPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
