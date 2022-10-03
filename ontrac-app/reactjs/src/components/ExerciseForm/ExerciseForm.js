import React from "react";
import { TextField, Button } from "@mui/material";

const ExerciseForm = ({ toggle, submitHandler, changeHandler, data }) => {
  return (
    <form onSubmit={submitHandler} style={styles.container}>
      <TextField
        name="name"
        label="Exercise name"
        variant="outlined"
        fullWidth={true}
        style={styles.input}
        onChange={changeHandler}
        value={data && data.name}
      />
      <div style={styles.horizontalInput}>
        <TextField
          name="sets"
          label="Sets"
          variant="outlined"
          style={styles.input}
          onChange={changeHandler}
          value={data && data.sets}
        />
        <TextField
          name="reps"
          label="Reps"
          variant="outlined"
          style={styles.input}
          onChange={changeHandler}
          value={data && data.reps}
        />
        <TextField
          name="pounds"
          label="Lbs"
          variant="outlined"
          style={styles.input}
          onChange={changeHandler}
          value={data && data.pounds}
        />
      </div>
      <TextField
        name="note"
        label="Notes"
        variant="outlined"
        multiline={true}
        fullWidth={true}
        style={styles.input}
        onChange={changeHandler}
        value={data && data.note}
      />
      <Button
        variant="outlined"
        size="large"
        style={styles.btn}
        onClick={toggle}
      >
        Cancel
      </Button>
      <Button variant="contained" type="submit" size="large" style={styles.btn}>
        Save
      </Button>
    </form>
  );
};

export default ExerciseForm;

const styles = {
  container: {
    width: "100%",
  },

  horizontalInput: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  input: {
    margin: "20px 0",
  },

  btn: {
    margin: "20px 20px 0 0",
  },
};
