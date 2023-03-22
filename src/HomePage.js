import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <div className="profile-section">
          <button onClick={() => alert('Profile clicked!')}>Profile</button>
        </div>
        <div className="chat-section">
          <h2>Chat Area</h2>
          {/* Add your chat components here */}
        </div>
        <div className="prompt-section">
          <h2>Prompts</h2>
          {/* Add your prompts components here */}
        </div>
      </header>
    </div>
  );
}

export default HomePage;
