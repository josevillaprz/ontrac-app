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
        fullWidth={true}
      />
      <TextField
        id="outlined-read-only-input"
        label="Last name"
        defaultValue={data.lastName}
        InputProps={{
          readOnly: true,
        }}
        style={styles.input}
        fullWidth={true}
      />
      <TextField
        id="outlined-read-only-input"
        label="Email"
        defaultValue={data.email}
        InputProps={{
          readOnly: true,
        }}
        style={styles.input}
        fullWidth={true}
      />
    </div>
  );
};

export default Userdetails;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },

  input: {
    marginBottom: "40px",
  },
};
