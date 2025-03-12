import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { email, password }); // Send a POST request to your backend /login endpoint
      console.log('User logged in:', response.data);
      // Optionally, redirect the user to another page or show a success message
    } catch (error) {
      console.error('Sign in failed:', error.response.data);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div className='body'>
      <section className="auth-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign In</button>

          <p className="registration-link">
            Don't have an account? <Link to="/registration">Register here</Link>.
          </p>
        </form>
      </section>
    </div>
  );
}

export default SignIn;
