import axios from 'axios';

// Set up a base URL for API requests
const BASE_URL = 'http://localhost:8080/api';  

// Create an Axios instance for making requests to the backend
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Axios instance for User Service
export const userService = axiosInstance;

// Axios instance for Book Service
export const bookService = axiosInstance;

// Axios instance for Order Service
export const orderService = axiosInstance;

export default axiosInstance;
