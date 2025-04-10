import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/userApi";

function GetStartedForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    // If the field is 'name', check for digits
    if (name === "name" && /\d/.test(value)) {
      alert("The Name field should not contain digits.");
      return; // Exit early without updating state
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createUser(formData);
      const userId = response.data.userID;
      alert(`Welcome, ${response.data.name}!`);
      navigate(`/user-portal/${userId}`);
    } catch (error) {
      console.error("Error creating user: ", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form className="get-started-form" onSubmit={handleSubmit}>
      <h2>Get Started!</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Create Account</button>
    </form>
  );
}

export default GetStartedForm;
