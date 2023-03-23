import React, { useState } from 'react';
import './AccountCreation.css';
import './App.css';

// function TextArt() {
//   return (


//   );
// }
function AccountCreation() {
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
    <div className="account-creation-container">


      <h1 style={{
        fontFamily: "'Futuristic Font', sans-serif",
        fontSize: "72px",
        textAlign: "center"
        
        
        
      }}>
        <span style={{ color: "#4d4d4d" }}>UNI</span>
        <span style={{ color: "#007bff" }}>verse</span>
        <span style={{ color: "#4d4d4d" }}>Chat</span>
      </h1>




      <form className="account-creation-form" onSubmit={handleSubmit}>
        <h2 className="account-creation-title">Create an Account</h2>
        <div className="account-creation-froms">
          <label className="account-creation-label" htmlFor="username">
            Username:
          </label>
          <input
            className="login-input form-fade-in"
            type="username"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form2-group">
          <label className="account-creation-label" htmlFor="password">
            Password:
          </label>
          <input
            className="login-input form-fade-in"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form2-group">
          <label className="account-creation-label" htmlFor="degree">
            Degree:
          </label>
          <select
            className="account-creation-select form-control"
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
        </div>
        <button className="account-creation-button btn btn-primary" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default AccountCreation;



