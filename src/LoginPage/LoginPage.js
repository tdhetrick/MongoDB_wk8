import React from "react";
import './LoginPage.css'

function LoginPage() {
  return (
    <div className="LoginPage">
    <div className="login-container">
      <form className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>

    </div>
  );
}

export default LoginPage;
