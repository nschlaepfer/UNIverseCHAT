// src/Register.js
import React, { useState } from 'react';
import './Register.css';


function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    degree: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to your backend to create a new user
    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User registered successfully:', data);
        // Redirect to the login page or another page as needed
      } else {
        console.error('Registration error:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (

    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Register</h2>
        <label className="register-label" htmlFor="username">
          Username:
        </label>
        <input
          className="register-input"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label className="register-label" htmlFor="password">
          Password:
        </label>
        <input
          className="register-input"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label className="register-label" htmlFor="degree">
          Degree:
        </label>
        <select
          className="register-select"
          id="degree"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          required
        >
          <option value="">--Please choose a degree--</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Chemical Engineering">Chemical Engineering</option>
        </select>
        <button className="register-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;


