import React, { useState } from "react";
import './login-signup.css';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

import user_icon from '../images/Assets/person.png';
import pass_icon from '../images/Assets/password.png';  

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/api/login', {
        name,
        password
      });
      const redirect = new URLSearchParams(location.search).get('redirect');

      if (redirect === 'sell') {
        navigate('/sell');
      } else if (redirect === 'buy') {
        navigate('/eshop');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="form-container">
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
      </div>
    </div>
  );
};

export default LoginSignup;
