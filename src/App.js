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
  
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('User authenticated successfully:', data);
        // Save the received token and redirect to the dashboard or another page as needed
        navigate('/home'); // Navigate to the home page
      } else {
        console.error('Authentication error:', data);
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error during authentication');
    }
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

// async function login(username, password) {
//   // Replace this with your actual login logic (API call)
//   return username === 'Poop' && password === 'test';
// }

export default App;





