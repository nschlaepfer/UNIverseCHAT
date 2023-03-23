import React, { useState } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import Title from './Title';
import './App.css';

function HomePage(props) {
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


    const { username, degree } = props;


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
                    <div className="welcome-section">
                        <div className="container-user">
                            <p class="left-text">Current Degree: {selectedDegree}</p>
                            <p class="right-text">Welcome, {username}!</p>
                        </div>
                    </div>
                    <div className="profile-section">
                        <button className="profile-button" onClick={handleProfileClick}>
                            Profile
                        </button>
                    </div>

                </div>
                <div className="prompt-section">
                    <h2>Prompts</h2>
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
                    <div className="chat-section-form">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Type your message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="login-input fade-in"
                            />
                            <div className="chat-section-button">
                                <button type="submit" className="chat-send-button">
                                    Send
                                </button>
                            </div>


                        </form>

                        <div className="degree-selection">
                            <label htmlFor="degree"></label>
                            <select id="degree" value={selectedDegree} onChange={handleDegreeChange} className="degree-select">
                                <option value="">--Please choose a degree--</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Electrical Engineering">Electrical Engineering</option>
                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                                <option value="Chemical Engineering">Chemical Engineering</option>
                            </select>
                        </div>
                    </div>

                </div>
            </header>
            <footer className="HomePage-footer">
                Made by{' '}
                <a href="https://github.com/nschlaepfer" target="_blank" rel="noreferrer">
                    Nicolas Schlaepfer
                </a>
            </footer>
        </div>
    );
}

export default HomePage;


