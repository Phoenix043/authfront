import React, { useEffect, useState } from 'react';
import { Link, Route, useNavigate } from 'react-router-dom';
import Logout from './Logout';
import axios from 'axios';

const PrivateRoute = () => {
  const navigate = useNavigate();
  const[name,setName]=useState('')
  useEffect(() => {
    const checkAuthentication = async () => {
      // Check if user is authenticated (you can implement your own authentication logic)
      const isAuthenticated = localStorage.getItem('token');
      if (!isAuthenticated) {
        // If not authenticated, navigate to the login page
        navigate('/login');
      } else {
        try {
          // If authenticated, make a request to the private endpoint
          const response = await axios.get('https://authback-6ju5.onrender.com/private',{withCredentials:true});
          setName(response.data)
         
        } catch (error) {
          // Handle error (e.g., if the token is invalid)
          console.error('Error fetching private data:', error);
          // Optionally, you can redirect the user to the login page here as well
          // navigate('/login');
        }
      }
    };

    // Call the function to check authentication when the component mounts
    checkAuthentication();
  }, []);

  // If authenticated, render the component
  return (
    <>
      <div className='container'>
        <div className="hoverable-div">
          <h1 className="hello-heading">Hello {name}</h1>
        </div>
          <Logout />
          <Link className="logout-button2" to='/'>Home</Link>
      </div>
    </>
  );
};

export default PrivateRoute;
