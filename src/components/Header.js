// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="logo-link">
            <h1 className="text-3xl font-bold text-red-600">
              <span role="img" aria-label="Gift">🎁</span> GiftGenius AI
            </h1>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="nav-link">
                  Find Gifts
                </Link>
              </li>
              <li>
                <Link to="/saved" className="nav-link">
                  Saved Gifts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
