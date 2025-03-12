// Home.js (or any other component where you render the navbar)

import React from 'react';
import Login from './Login'; // Import the Login component

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home">Home</a>
      <a href="#product">Product</a>
      <a href="#about">About</a>
      <a href="#review">Review</a>
      <a href="#blog">Blog</a>
      <a href="#contact">Contact</a>
      <Login /> {/* Render the Login component */}
    </div>
  );
}

export default Navbar;
