import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Chat() {
  const [chatHistory, setChatHistory] = useState([]);

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

  useEffect(() => {
    fetchChatHistory();
  }, []);

  // Your JSX rendering code goes here
  return (
    <div className="chat-container">
      {/* Add your chat history and input components here */}
    </div>
  );
}

export default Chat;
