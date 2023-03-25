import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import HomePage from './HomePage';
import AccountPage from './AccountPage';
import AccountCreation from './AccountCreation';


const RoutesComponent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<HomePage username="test" />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/account-creation" element={<AccountCreation />} />
    </Routes>
  </Router>
);

export default RoutesComponent;
