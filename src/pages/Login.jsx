import React from 'react'
import "../style.scss"
const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Pen Pal App</span>
            <span className="title">Login</span>
            <form>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password" />
                <button>Sign up</button>
            </form>
            <p>Don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login