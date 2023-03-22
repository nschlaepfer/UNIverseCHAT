import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <div>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={() => alert('Next button clicked!')}>Next</button>
        </div>
      </header>
    </div>
  );
}

export default App;
