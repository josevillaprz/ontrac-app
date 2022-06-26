import React from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { BiTrash } from "react-icons/bi";

// dummy data
const DropDown = ({ exercises }) => {
  const [exercise, setExercise] = React.useState("");

  const handleChange = (event) => {
    setExercise(event.target.value);
  };

  return (
    <FormControl fullWidth style={styles.container}>
      <InputLabel id="demo-simple-select-label">Exercise</InputLabel>
      <Select
        style={styles.select}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={exercise}
        onChange={handleChange}
        fullWidth={true}
      >
        {exercises.map((exercise) => (
          <MenuItem value={exercise.name}>{exercise.name}</MenuItem>
        ))}
      </Select>
      <button style={styles.btn} type="button">
        <BiTrash size="26" />
      </button>
    </FormControl>
  );
};

export default DropDown;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
  },

  select: {
    marginRight: "30px",
  },

  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    height: "60px",
    width: "60px",
    backgroundColor: "#E8E8EB",
    cursor: "pointer",
    boxShadow: "0 2px 4px #C7C7C7",
    color: "#2F2F2F",
  },
};
