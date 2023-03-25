import React, { useState } from 'react';
import './AccountCreation.css';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Title from './Title';
import EmojiBook from './EmojiBook';



// function TextArt() {
//   return (


//   );
// }



function AccountCreation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    degree: '',
  });

  const [successMessage, setSuccessMessage] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [formStyle, setFormStyle] = useState({});




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistrationSubmit = async (event) => {

    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: formData.username, password: formData.password, degree: formData.degree }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User registered successfully:', data);
        setSuccessMessage(true);
        setIsSuccessful(true);
        setFormStyle({ boxShadow: '0 4px 6px rgba(0, 255, 0, 0.2)' });
        //Alert user that they have successfully registered
        setTimeout(() => {
          // Redirect the user to the login page or another page as needed
          navigate('/home');
        }, 3000); // 3 seconds
      } else {
        console.error('Registration error:');
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }



    //not sure if this right setFormStyle({ boxShadow: '0 4px 6px rgba(0, 255, 0, 0.2)' });



  };


  return (
   

    <div className="account-creation-container">
     
        
  
  
      <Title />

      <form className="account-creation-form" onSubmit={handleRegistrationSubmit}>
        <h2 className="account-creation-title">Create an Account</h2>
        <div className="account-creation-from">
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

        <p className={`success-message ${successMessage ? 'visible' : ''}`}>
          Registration successful!
        </p>

     
        <button className="account-creation-button btn btn-primary" type="submit">
          Create Account
        </button>
       

       

      </form>
     
    </div>
  );
}

export default AccountCreation;



