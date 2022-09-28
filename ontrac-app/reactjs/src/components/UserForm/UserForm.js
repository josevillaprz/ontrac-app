import React from "react";
// import styles from "./UserForm.module.css";
import { TextField } from "@mui/material";
import Btn from "../Buttons/Btn";

const Userform = ({ toggleEdit }) => {
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
      <div style={styles.btnGroup}>
        <Btn text="Cancel" variant="outlined" clickHandler={toggleEdit} />
        <Btn text="Save" variant="contained" />
      </div>
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

  btnGroup: {
    display: "flex",
    gap: "10px",
    justifyContent: "flex-end",
    margin: "20px 0",
  },
};
