import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Chat() {
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState('');

  const fetchChatHistory = async () => {
    try {
      const config = {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      };

      const res = await axios.get('/api/chatMessages', config);
      setChatHistory(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('token'),
        },
      };

      const body = { message };

      const res = await axios.post('/api/chatMessages', body, config);
      setChatHistory([...chatHistory, res.data]);
      setMessage('');
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchChatHistory();
  }, []);

  // Your JSX rendering code goes here
  return (
    <div className="chat-container">
      <div className="chat-history">
        {chatHistory.map((chat) => (
          <div key={chat._id}>
            <p>{chat.message}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;

