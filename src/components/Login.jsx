// components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://authback-6ju5.onrender.com/login', { username, password }, { withCredentials: true });
      
     localStorage.setItem('token', response.data.token);
      // Navigate to the private route
     navigate('/private');
    } catch (error) {
      alert('Login failed')
      console.error('Login failed:', error);
    }
  };

  return (
    <div class="login-form">
    <input type="text" class="input-field" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
    <input type="password" class="input-field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <button class="login-button" onClick={handleLogin}>Login</button>
    <br />
    <Link to='/' class="register-link">Register</Link>
    </div>    
  );
};

export default Login;
