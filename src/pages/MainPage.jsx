import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../style.scss';

const MainPage = () => {
  return (
    <div className="mainContainer">
      <div className="welcomeSection">
        <img src={logo} alt="PenPal Connect Logo" className="logoImage" />
        <h1 className="title">Welcome to PenPal Connect!</h1>
      </div>
      <div className="buttonContainer">
        <Link to="/home" className="navButton">Messages</Link>
        <Link to="/games" className="navButton">Games</Link>
        <Link to="/faq" className="navButton">FAQ</Link>
      </div>
    </div>
  );
};

export default MainPage;





