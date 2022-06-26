import React from "react";
import { TextField, Button } from "@mui/material";

const ExerciseForm = ({
  clickHandler,
  submitHandler,
  nameHandler,
  repsHandler,
  setsHandler,
  poundsHandler,
  noteHandler,
}) => {
  return (
    <div style={styles.container}>
      <form onSubmit={submitHandler} style={styles.formContainer}>
        <TextField
          label="Exercise name"
          variant="outlined"
          fullWidth={true}
          style={styles.input}
          onChange={nameHandler}
        />
        <div style={styles.horizontalInput}>
          <TextField
            label="Sets"
            variant="outlined"
            style={styles.input}
            onChange={setsHandler}
          />
          <TextField
            label="Reps"
            variant="outlined"
            style={styles.input}
            onChange={repsHandler}
          />
          <TextField
            label="Lbs"
            variant="outlined"
            style={styles.input}
            onChange={poundsHandler}
          />
        </div>
        <TextField
          label="Notes"
          variant="outlined"
          multiline={true}
          fullWidth={true}
          style={styles.input}
          onChange={noteHandler}
        />
        <Button
          variant="outlined"
          size="large"
          style={styles.btn}
          onClick={clickHandler}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          size="large"
          style={styles.btn}
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default ExerciseForm;

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
  },

  formContainer: {
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
