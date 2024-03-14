// utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://authback-6ju5.onrender.com', // Update with your backend URL
  //withCredentials: true, // Send cookies with requests
});

// // Add request interceptor to send token with each request
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Add response interceptor to handle unauthorized responses
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       // Handle unauthorized access, e.g., redirect to login page
//       console.error('Unauthorized access:', error.response.data.message);
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
