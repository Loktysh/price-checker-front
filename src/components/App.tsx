import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutPage, MainPage } from './pages';
import { LoginPage } from './pages/LoginPage';
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
      </Routes>
    </Router>
  );
};

export default App;
