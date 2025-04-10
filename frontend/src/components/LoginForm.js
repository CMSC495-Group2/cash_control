import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserList, getUser} from "../api/userApi";

const LoginForm = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
 
  const [errMsg, setErrMsg] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // First, get the full list of users
      const response = await getUserList();
      const users = response.data;

      // Find the correct user with name and email
      const match = users.find((user) =>
          user.email.toLowerCase().trim() === formData.email.toLowerCase().trim() &&
          user.name.toLowerCase().trim() === formData.username.toLowerCase().trim()
      );

      //console.log (match);

      if(match){
        // Get the user 
        //console.log(match.userID)
        const userResponse = await getUser(match.userID);
        const user = userResponse.data;

        // Redirect to user portal
        navigate(`/user-portal/${user.userID}`);
      }else{
        setErrMsg("Invalid name or email. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setErrMsg("Login failed. Server error.");
    }
  };

  

  return (
        <div className="login-column">
          <p
            ref={errRef}
            className={errMsg ? "errMsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Account Login</h2>
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                name="username"
                placeholder="Enter your name"
                ref={userRef}
                autoComplete="off"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email"
                value={formData.email}
                required
              />
            </label>
            <button type="submit">Sign In</button>
            <span id="line">
              <p>Need an Account?</p>
              <Link to="/get-started">Sign Up</Link>
            </span>
          </form>
        </div>
  );
};

export default LoginForm;
