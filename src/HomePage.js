import React, { useState } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import Title from './Title';


function HomePage() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [selectedDegree, setSelectedDegree] = useState('');

    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/account');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            setMessages([...messages, message]);
            setMessage('');
        }
    };

    const handleDegreeChange = (e) => {
        setSelectedDegree(e.target.value);
    };

    // Add a list of prompts
    const prompts = [
        'Prompt 1',
        'Prompt 2',
        'Prompt 3',
        'Prompt 4',
        'Prompt 5',
        'Prompt 6',
        'Prompt 7',
        'Prompt 8',
        'Prompt 9',
        'Prompt 10',
    ];



    return (
        <div className="HomePage">
            <Title />
            <header className="HomePage-header">
                <div className="profile-container">
                    <div className="profile-section">
                        <button onClick={handleProfileClick}>Profile</button>
                    </div>
                    <div className="section-container">
                    <div className="welcome-section">
                        <p>Welcome, username!</p>
                        <p>Current Degree: Computer Science</p>
                    </div>
                </div>
                </div>
            
                <div className="prompt-section">
                    <h2>Prompts</h2>
                    {/* Add your prompts components here */}
                    {prompts.map((prompt, index) => (
                        <div key={index} className="prompt-item">
                            {prompt}
                        </div>
                    ))}
                </div>
                <div className="chat-section">
                    <h2>Chat Area</h2>
                    <ul>
                        {messages.map((msg, index) => (
                            <li key={index}>{msg}</li>
                        ))}
                    </ul>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            style={{ textIndent: "0" }}
                        />
                        <button type="submit">Send</button>
                    </form>
                    <div className="degree-selection">
                        <label htmlFor="degree"></label>
                        <select id="degree" value={selectedDegree} onChange={handleDegreeChange}>
                            <option value="">--Please choose an option--</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Electrical Engineering">Electrical Engineering</option>
                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                            <option value="Chemical Engineering">Chemical Engineering</option>
                        </select>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HomePage;

