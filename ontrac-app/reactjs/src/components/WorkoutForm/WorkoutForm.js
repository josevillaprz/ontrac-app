import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import DropDown from "../DropDown/DropDown";
import { GrAddCircle } from "react-icons/gr";

const Workoutform = ({ clickHandler, exercises }) => {
  const [inputList, setInputList] = useState([]);
  const handleClick = (e) => {
    setInputList(inputList.concat(<DropDown exercises={exercises} />));
  };
  return (
    <div style={styles.container}>
      <form action="/" style={styles.formContainer}>
        <TextField
          label="Workout name"
          fullWidth="true"
          style={styles.textInput}
        />
        {inputList}
        <button type="button" onClick={handleClick} style={styles.addBtn}>
          <GrAddCircle size="26" />
          Add Exercise
        </button>
        <div style={styles.btnGroup}>
          <Button
            variant="outlined"
            size="large"
            onClick={clickHandler}
            style={styles.btn}
          >
            Cancel
          </Button>
          <Button variant="contained" type="submit" size="large">
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Workoutform;

const styles = {
  container: {
    maxWidth: "1200px",
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: "15px",
    boxShadow: "0 10px 20px #D0D8E8",
    padding: "60px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  textInput: {
    marginBottom: "60px",
  },

  addBtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "18px",
    color: "#737885",
    width: "150px",
    cursor: "pointer",
    marginBottom: "40px",
  },

  btnGroup: {
    alignSelf: "flex-end",
  },

  btn: {
    marginRight: "20px",
  },
};
