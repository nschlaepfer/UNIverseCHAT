import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from './Title';
import './AccountPage.css';
import './HomePage.css';

function AccountPage({ onLogout }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogout = () => {
    // Perform any necessary logout actions, such as clearing authentication tokens
    navigate('/');
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/api/updateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      });
  
      if (!response.ok) {
        throw new Error('Failed to update account settings');
      }
  
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="AccountPage">
      <Title />
      <h1>Account Settings</h1>
      <form className="login-form fade-in">
        <input type="username" placeholder="Username" className="login-input" value={username} onChange={handleUsernameChange}/>
        <input type="password" placeholder="Password" className="login-input" value={password} onChange={handleUsernameChange}/>
        <div className="account-form-row">
          <button type="button" onClick={handleSave}>Save Changes</button>
          <button type="button" onClick={handleLogout}>Logout</button>
        </div>
      </form>
    </div>
  );
}

export default AccountPage;

