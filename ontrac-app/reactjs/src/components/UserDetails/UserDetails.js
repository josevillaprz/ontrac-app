import React from "react";
import { TextField } from "@mui/material";

const Userdetails = () => {
  return (
    <div style={styles.container}>
      <TextField
        id="outlined-read-only-input"
        label="Name"
        defaultValue="Jane"
        InputProps={{
          readOnly: true,
        }}
        style={styles.input}
      />
      <TextField
        id="outlined-read-only-input"
        label="Email"
        defaultValue="email@.com"
        InputProps={{
          readOnly: true,
        }}
        style={styles.input}
      />
      <TextField
        id="outlined-read-only-input"
        label="Weight"
        defaultValue="210"
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
