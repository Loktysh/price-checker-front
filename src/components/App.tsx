import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { logUser } from '../store/actions';
import { API_LINK } from './common/constants';
import { User } from './common/types';
import { AboutPage, MainPage } from './pages';
import ItemsPage from './pages/ItemsPage';
import { LoginPage } from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import { SignupPage } from './pages/SignupPage';
import { fetchUser, getStorageItem } from '../utils/index';

const App = () => {
  const dispatch = useDispatch();

  const initializeFetch = async () => {
    const token = getStorageItem('token');
    const renewToken = getStorageItem('renewToken');
    if (token && renewToken) {
      return fetchUser(token, renewToken);
    }
    return;
  };

  useEffect(() => {
    initializeFetch().then((info: User | undefined) => {
      if (info) {
        logUser(info.user.login, info.user.trackingProducts);
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Route>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products/:query' element={<ItemsPage />} />
        <Route path='/product/:key' element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
