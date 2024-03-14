// Register.js

import React, { useState } from 'react';
import axios from 'axios';
import api from '../utils/api';
import { Link, useNavigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const Register = () => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate=useNavigate()

  const handleRegister = async () => {
    try {
      const response = await api.post('/register', { username, password });
      console.log('Registration successful:', response.data.message);
      navigate('/login')
      // Optionally, redirect the user to another page after successful registration
    } catch (error) {
      console.error('Registration failed:', error.response.data.message);
      alert('Registration failed')
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div class="registration-form">
      <h2>User Registration</h2>
      {errorMessage && <p class="error-message">{errorMessage}</p>}
      <input type="username" class="input-field" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" class="input-field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button class="register-button" onClick={handleRegister}>Register</button>
      <br />
      Already have an account <Link to='./login' class="login-link"><p>Login</p></Link>
      <Link to='/private' class="private-link"><h1>Private</h1></Link>
</div>
  );
};

export default Register;
