/*
 *  Left panel navbar
 */

import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import Globe from "../img/globe.webp";
import logo from '../img/logo.png'; // Adjust the path as needed

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">
        {" "}
        <span className="logo"> <img src={logo} alt="PenPal Connect Logo"style={{ width: '20px', height: 'auto' }}></img>PenPal Connect</span>
      </span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
