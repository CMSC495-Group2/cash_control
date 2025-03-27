import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const userRef = useRef();
  const errRef = useRef();
  //const history = useHistory();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate authentication.
      console.log(user, pwd);
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      setErrMsg("Failed to login. Please try again.");
    }
  };

  //concept taken from GetStartedForm
  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      {success ? (
        <section className="login-success-section">
          <h1>You are logged in!</h1>
          <br />
          <p>
            <Link to="/user-portal">Go to User Portal</Link>
          </p>
        </section>
      ) : (
        <section className="login-form-section">
          <p
            ref={errRef}
            className={errMsg ? "errMsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Account Login</h2>
            <label htmlFor="username">
              Username
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                ref={userRef}
                autoComplete="off"
                onChange={handleChange}
                value={formData.user}
                required
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                id="password"
                onChange={handleChange}
                placeholder="Enter your password"
                value={formData.pwd}
                required
              />
            </label>
            <button type="submit">Sign In</button>
            <span id="line">
              <p>Need an Account?</p>
              <Link to="/get-started">Sign Up</Link>
            </span>
          </form>
        </section>
      )}
    </>
  );
};

export default LoginForm;
