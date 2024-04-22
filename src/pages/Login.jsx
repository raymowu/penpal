import React, { useState } from "react";
import "../style.scss";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import logo from '../img/logo.png'; // Adjust the path as needed

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      window.location.reload();
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
      <span className="logo"> <img src={logo} alt="PenPal Connect Logo"style={{ width: '50px', height: 'auto' }}></img>PenPal Connect</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        {err && <span>Something went wrong</span>}
      </div>
    </div>
  );
};

export default Login;
