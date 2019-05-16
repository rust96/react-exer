import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        <li className="header__link"><Link to="/">Home</Link></li>
        <li className="header__link"><Link to="/news">News</Link></li>
        <li className="header__link"><Link to="/login">Login</Link></li>
        <li className="header__link"><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  )
}

export default Header;
