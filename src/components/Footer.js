// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} GiftGenius AI. All Rights Reserved.
          </p>
          <p className="mt-2">
            Finding the perfect gift made easy!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
