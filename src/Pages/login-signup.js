import React, { useState } from "react";
import './login-signup.css';
import axios from 'axios';

import user_icon from '../images/Assets/person.png';
import pass_icon from '../images/Assets/password.png';  
import email_icon from '../images/Assets/email.png';


const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/api/signup', {
        name,
        email,
        password
      });
      alert('Data saved successfully!');
      // Clear input fields after successful submission
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving data. Please try again.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // const response = 
      await axios.post('http://localhost:8081/api/login', {
        name,
        password
      });
      // Assuming response contains a token upon successful login
      //const token = response.data.token;
      // You can handle token storage or redirection here
      alert('Login successful!');
    } catch (error) {
      console.error('Login failed:', error.message);
      alert('Login failed. Please check your credentials and try again.');
    }
  };


  return (
    <div className="form-container">
      {isLogin ? (
        <div className="login">
          <h2>Login</h2>
          <div className="input-container1">
            <img src={user_icon} alt="user icon" />
            <input type="text" className="field" placeholder="Username" value={name} onChange={handleNameChange} />
          </div>
          <div className="input-container1">
            <img src={pass_icon} alt="password icon" />
            <input type="password" className="field"  placeholder="Password" value={password} onChange={handlePasswordChange} />
          </div>
          <button onClick={handleLogin}>Login</button>
          <p onClick={handleToggle}>Don't have an account? Sign Up</p>
        </div>
      ) : (
        <div className="signup">
          <h2>Signup</h2>
          <div className="input-container1">
            <img src={user_icon} alt="user icon" />
            <input type="text" className="field" placeholder="Username"  value={name} onChange={handleNameChange}/>
          </div>
          <div className="input-container1">
            <img src={email_icon} alt="email icon" />
            <input type="text" className="field"  placeholder="Email" value={email} onChange={handleEmailChange}/>
          </div>
          <div className="input-container1">
            <img src={pass_icon} alt="password icon" />
            <input type="password" className="field"  placeholder="Password" value={password} onChange={handlePasswordChange}/>
          </div>
          <button onClick={handleSubmit}>Signup</button>
          <p onClick={handleToggle}>Already have an account? Login</p>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
