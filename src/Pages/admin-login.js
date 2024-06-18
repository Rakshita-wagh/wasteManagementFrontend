import React, { useState } from "react";
import './login-signup.css';
import { useNavigate } from 'react-router-dom';

import user_icon from '../images/Assets/person.png';
import pass_icon from '../images/Assets/password.png';  

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const adminName = 'admin';
    const adminPassword = 'a1234';

    if (name === adminName && password === adminPassword) {
      navigate('/display'); 
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
          <input type="password" className="field" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginSignup;
