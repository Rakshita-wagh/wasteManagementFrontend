import React, { useState } from "react";
import './login-signup.css';

import user_icon from '../images/Assets/person.png';
import pass_icon from '../images/Assets/password.png';  
import email_icon from '../images/Assets/email.png';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="form-container">
      {isLogin ? (
        <div className="login">
          <h2>Login</h2>
          <div className="input-container1">
            <img src={user_icon} alt="user icon" />
            <input type="text" className="field" placeholder="Username" />
          </div>
          <div className="input-container1">
            <img src={pass_icon} alt="password icon" />
            <input type="password" className="field"  placeholder="Password" />
          </div>
          <button>Login</button>
          <p onClick={handleToggle}>Don't have an account? Sign Up</p>
        </div>
      ) : (
        <div className="signup">
          <h2>Signup</h2>
          <div className="input-container1">
            <img src={user_icon} alt="user icon" />
            <input type="text" className="field" placeholder="Username" />
          </div>
          <div className="input-container1">
            <img src={email_icon} alt="email icon" />
            <input type="text" className="field"  placeholder="Email" />
          </div>
          <div className="input-container1">
            <img src={pass_icon} alt="password icon" />
            <input type="password" className="field"  placeholder="Password" />
          </div>
          <button>Signup</button>
          <p onClick={handleToggle}>Already have an account? Login</p>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
