import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Interview Preparation Helper. All Rights Reserved.</p>
      <p>Build your knowledge, take quizzes, and prepare for interviews!</p>
    </footer>
  );
};

export default Footer;
