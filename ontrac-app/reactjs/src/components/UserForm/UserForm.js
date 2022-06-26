import React from "react";
// import styles from "./UserForm.module.css";
import { TextField, Button } from "@mui/material";

const Userform = () => {
  return (
    <form style={styles.container}>
      <h2 style={styles.title}>Edit</h2>
      <div style={styles.inputsContainer}>
        <TextField
          id="outlined-read-only-input"
          label="Name"
          defaultValue="Jane"
          style={styles.input}
        />
        <TextField
          id="outlined-read-only-input"
          label="Email"
          defaultValue="email@.com"
          style={styles.input}
        />
        <TextField
          id="outlined-read-only-input"
          label="Weight"
          defaultValue="210"
          style={styles.input}
        />
      </div>
      <Button style={styles.btn} variant="contained" size="large">
        Save
      </Button>
    </form>
  );
};

export default Userform;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },

  inputsContainer: {
    display: "flex",
    flexWrap: "wrap",
  },

  input: {
    margin: "20px 40px 20px 0",
    width: "calc(50% - 60px)",
  },

  btn: {
    alignSelf: "end",
  },

  title: {
    fontWeight: "600",
  },
};
