import React from "react";
// import styles from "./UserForm.module.css";
import { TextField } from "@mui/material";
import Btn from "../Buttons/Btn";

const Userform = ({ toggleEdit, changeHandler, data, submitHandler }) => {
  return (
    <form style={styles.container} onSubmit={submitHandler}>
      <h2 style={styles.title}>Edit</h2>
      <div style={styles.inputsContainer}>
        <TextField
          id="outlined-read-only-input"
          label="First name"
          defaultValue={data.firstName}
          style={styles.input}
          onChange={changeHandler}
          name="firstName"
        />
        <TextField
          id="outlined-read-only-input"
          label="Last Name"
          defaultValue={data.lastName}
          style={styles.input}
          onChange={changeHandler}
          name="lastName"
        />
        <TextField
          id="outlined-read-only-input"
          label="Email"
          defaultValue={data.email}
          style={styles.input}
          onChange={changeHandler}
          name="email"
        />
      </div>
      <div style={styles.btnGroup}>
        <Btn text="Cancel" variant="outlined" clickHandler={toggleEdit} />
        <Btn type="submit" text="Save" variant="contained" />
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
