import React from "react";
import { TextField } from "@mui/material";

const Userdetails = ({ data }) => {
  return (
    <div style={styles.container}>
      <TextField
        id="outlined-read-only-input"
        label="First name"
        defaultValue={data.firstName}
        InputProps={{
          readOnly: true,
        }}
        style={styles.input}
      />
      <TextField
        id="outlined-read-only-input"
        label="Last name"
        defaultValue={data.lastName}
        InputProps={{
          readOnly: true,
        }}
        style={styles.input}
      />
      <TextField
        id="outlined-read-only-input"
        label="Email"
        defaultValue={data.email}
        InputProps={{
          readOnly: true,
        }}
        style={styles.input}
      />
    </div>
  );
};

export default Userdetails;

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
  },

  input: {
    margin: "20px 40px 20px 0",
    width: "calc(50% - 60px)",
    minWidth: "260px",
  },
};
