import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Title from './Title';
import StarBackground from './StarBackground';
import './App.css';
import HomePage from './HomePage';
import SpaceBackground from './SpaceBackground';
import Register from './Register';

function App() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleRegisterClick = () => {
    navigate('/account-creation');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Add your login logic here, e.g., make an API call to your backend to authenticate the user.
    // If the login is successful, navigate to the home page.
    const isAuthenticated = await login(username, password);
    if (isAuthenticated) {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
    // const enteredUsername = event.target.username.value;
    // setUsername(enteredUsername);
    // navigate('/home'); // Navigate to the home page
  };

  return (
    <div className="App">
      <SpaceBackground />
      <Title />
      <h1>Login</h1>
      <form className="login-form fade-in" onSubmit={handleFormSubmit}>
        <input
          type="username"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit" className="login-button scale-up">
          Next
        </button>
       
         
        <p>Don't have an account? <span onClick={handleRegisterClick}>Register</span>
        </p>
    
      </form>
    </div>
  );
}

async function login(username, password) {
  // Replace this with your actual login logic (API call)
  return username === 'Poop' && password === 'test';
}

export default App;





