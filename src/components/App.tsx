import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutPage, MainPage } from './pages';
import ItemsPage from './pages/ItemsPage';
import { LoginPage } from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import { SettingsPage } from './pages/Settings page/SettingsPage';
import { SignupPage } from './pages/SignupPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Route>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products/:query' element={<ItemsPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
