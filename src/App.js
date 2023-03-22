import React from 'react';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Title from './Title';


import './App.css';

function App() {
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    navigate('/home');
  };

  return (
    <div className="App">
      <Title /> { /* Component for title */}
      <header className="App-header">
        <h1>Login</h1>
        <div>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={handleNextButtonClick}>Next</button>
        </div>
      </header>
    </div>
  );
}



export default App;
