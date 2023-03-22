import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const handleSave = () => {
    // Save the new username and password here
    console.log('New username:', username);
    console.log('New password:', password);
  };

  return (
    <div>
      <h1>Account Page</h1>
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
      </div>
      <button onClick={handleSave}>Save Changes</button>
      <button onClick={handleLogout}>Logout</button>

    </div>
  );
}

export default AccountPage;
