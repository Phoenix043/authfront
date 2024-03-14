// components/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post('/logout');
      localStorage.removeItem('token');
      // Navigate to the login page
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <button class="logout-button" onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
