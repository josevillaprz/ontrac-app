import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "../../components/SignUp/SignUp";
import styles from "../PageStyles.module.css";

const Signup = ({ toggleLogin }) => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/auth/register", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(input),
    });

    const data = await response.json();
    localStorage.setItem("userId", data.id);
    localStorage.setItem("accessToken", data.token);
    toggleLogin();
    navigate("/homepage");
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.centerContainer}>
      <SignUp handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Signup;
