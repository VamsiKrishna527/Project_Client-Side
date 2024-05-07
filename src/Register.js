import React, { useState } from "react";
import axios from "axios";
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await fetch("http://127.0.0.1:8000/register/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (!response.ok) {
      //   throw new Error("Registration failed");
      // }
      // const data = await response.json();
      // console.log("Registration successful", data);
      const response = await axios.post(
        "http://127.0.0.1:8000/register/",
        formData
      );
      
      console.log("Data saved successfully:", response.data);
      setSuccessMessage("Registering user is successful");
      setErrorMessage("");
      setFormData({
        username: "",
        email: "",
        password: "",
        name: "",
      });
    } catch (error) {
      console.error("Registration failed:", error.message);
      setErrorMessage("Failed to register the user");
      setSuccessMessage("");
    }
  };

  return (
    <div>
    {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default Register;
