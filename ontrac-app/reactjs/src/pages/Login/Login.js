import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPortal from "../../components/LoginPortal/LoginPortal";
import styles from "../PageStyles.module.css";

const Login = ({ toggleLogin }) => {
  // STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // HANDLDER
  const handleLogin = async (e) => {
    e.preventDefault();
    // make fetch request to the api for login
    const response = await fetch("/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("accessToken", data.token);
      localStorage.setItem("userId", data.id);
      toggleLogin();
      navigate("/homepage");
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.centerContainer}>
      <LoginPortal
        submitHandler={handleLogin}
        updateEmail={updateEmail}
        updatePassword={updatePassword}
      />
    </div>
  );
};

export default Login;
