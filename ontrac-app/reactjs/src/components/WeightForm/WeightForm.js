import React from "react";
import { TextField, Button } from "@mui/material";

const Weightform = ({ clickHandler, submitHandler, changeHandler }) => {
  return (
    <form style={styles.container} onSubmit={submitHandler}>
      <TextField
        label="Weight (lbs)"
        variant="outlined"
        fullWidth={true}
        onChange={changeHandler}
      />
      <div style={styles.btnGroup}>
        <Button onClick={clickHandler} variant="outlined" style={styles.btn}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" style={styles.btn}>
          Save
        </Button>
      </div>
    </form>
  );
};

export default Weightform;

const styles = {
  container: {
    maxWidth: "1200px",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "15px",
    boxShadow: "0 10px 20px #D0D8E8",
    padding: "60px",
    marginBottom: "60px",
  },

  btnGroup: {
    alignSelf: "end",
  },

  btn: {
    margin: "20px 0 0 20px",
  },
};
