import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import HomePage from './HomePage';
import AccountPage from './AccountPage';

const RoutesComponent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/account" element={<AccountPage />} />
    </Routes>
  </Router>
);

export default RoutesComponent;
