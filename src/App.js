import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from './Title';
import StarBackground from './StarBackground';
import './App.css';

function App() {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  return (
    <div className="App">
      <StarBackground />
      <Title />
      <h1>Login</h1>
      <form className="login-form fade-in" onSubmit={handleFormSubmit}>
        <input type="username" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button type="submit" className="login-button scale-up">Next</button>
      </form>
    </div>
  );
}

export default App;




