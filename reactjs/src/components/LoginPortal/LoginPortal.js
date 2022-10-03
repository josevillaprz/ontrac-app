import React from "react";
import logo from "../../assets/logo-black.png";
import gradient from "../../assets/gradient.png";
// import stylesModule from "./LoginPortal.module.css";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Loginportal = ({ submitHandler, updateEmail, updatePassword }) => {
  return (
    <section style={styles.container}>
      <div style={styles.formContainer}>
        <img src={logo} alt="logo" style={styles.logo} />
        <h1 style={styles.title}>Sign in with your email</h1>
        <p style={styles.subtitle}>
          Don't have an account?
          <Link style={styles.link} to="/signup">
            {" "}
            Sign up
          </Link>
        </p>
        <form onSubmit={submitHandler}>
          <div style={styles.inputControls}>
            <TextField
              style={styles.input}
              name="email"
              label="Email"
              fullWidth={true}
              size="small"
              onChange={updateEmail}
            />
            <TextField
              style={styles.input}
              name="password"
              type="password"
              label="Password"
              fullWidth={true}
              size="small"
              onChange={updatePassword}
            />
          </div>
          <Button
            style={styles.btn}
            variant="contained"
            fullWidth={true}
            type="submit"
            size="large"
          >
            Login
          </Button>
        </form>
      </div>
      <div>
        <img src={gradient} alt="gradient" style={styles.gradient} />
      </div>
    </section>
  );
};

export default Loginportal;

const styles = {
  container: {
    display: "flex",
    maxWidth: "760px",
    height: "670px",
    boxShadow: "0 10px 20px #D0D8E8",
    borderRadius: "15px",
  },

  logo: {
    width: "240px",
    margin: "50px auto",
  },

  gradient: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "0 15px 15px 0",
  },

  formContainer: {
    width: "310px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: "60px",
    borderRadius: "15px 0 0 15px",
  },

  title: {
    fontWeight: "500",
    fontSize: "18px",
    marginBottom: "8px",
  },

  subtitle: {
    fontSize: "12px",
    color: "#737885",
    marginBottom: "30px",
  },

  link: {
    color: "#7FACFE",
  },

  inputControls: {
    marginBottom: "50px",
  },

  input: {
    margin: "10px 0",
  },

  btn: {
    margin: "10px 0",
  },
};
