import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">Profile</Link>
    </div>
  )
}

export default Header;
