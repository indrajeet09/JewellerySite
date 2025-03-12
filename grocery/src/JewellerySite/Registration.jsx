import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'male', // Default gender option
    email: '',
    password: '',
    number: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/register', formData);
      console.log('User registered:', response.data);
      // Optionally, redirect the user to another page or show a success message
    } catch (error) {
      console.error('Registration failed:', error.response.data);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div className='auth-container'>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />

        <label>Gender:</label>
        <div className="gender-options">
          <div>
            <input type="radio" id="male" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
            <label htmlFor="male">Male</label>
          </div>

          <div>
            <input type="radio" id="female" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
            <label htmlFor="female">Female</label>
          </div>

          <div>
            <input type="radio" id="other" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleChange} />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

        <label htmlFor="number">Phone Number:</label>
        <input type="text" id="number" name="number" value={formData.number} onChange={handleChange} required />

        <button type="submit">Register</button>

        <p className="signin-link">
          Already have an account? <Link to="/signin">Sign In here</Link>.
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
