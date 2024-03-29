import React, { useState } from "react";
import { CreateExercise } from "../../utils/api";
import ExerciseForm from "../ExerciseForm/ExerciseForm";

const AddExercise = ({ toggle }) => {
  const [inputData, setInputdata] = useState({
    name: "",
    sets: 0,
    reps: 0,
    pounds: 0,
    note: "",
  });

  const changeHandler = (e) => {
    const value = e.target.value;
    setInputdata({ ...inputData, [e.target.name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await CreateExercise(inputData);
    toggle();
  };

  return (
    <div style={styles.container}>
      <ExerciseForm
        toggle={toggle}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
      />
    </div>
  );
};

export default AddExercise;

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
