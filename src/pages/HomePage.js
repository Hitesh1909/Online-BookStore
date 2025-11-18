import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Online Bookstore</h1>
      <p>Your one-stop destination for amazing books!</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/books" style={linkStyle}>
          Browse Books
        </Link>
        <br />
        <Link to="/register" style={linkStyle}>
          Register
        </Link>
        <br />
        <Link to="/login" style={linkStyle}>
          Login
        </Link>
      </div>
    </div>
  );
};

const linkStyle = {
  textDecoration: 'none',
  color: 'blue',
  fontSize: '18px',
  margin: '10px',
};

export default HomePage;
