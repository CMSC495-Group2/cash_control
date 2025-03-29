import React from "react";
import LoginForm from "../components/LoginForm";
import LoginImage from "../components/LoginImage";
import NavBar from "../components/NavBar";

function Login() {
  return (
    <>
    <NavBar/>
    <div className="login-container">
      <LoginImage />
      <LoginForm />
    </div>
    </>
  );
}

export default Login;
