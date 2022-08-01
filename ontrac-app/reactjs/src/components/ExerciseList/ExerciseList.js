import React from "react";
import styles from "./ExerciseList.module.css";
import { Button } from "@mui/material";
import Exercise from "../Exercise/Exercise";

const Exerciselist = ({ toggle, toggleEdit, exercises }) => {
  return (
    <div className={styles.container}>
      <Button variant="contained" size="large" onClick={toggle}>
        Create
      </Button>
      {exercises.map((exercise) => (
        <Exercise
          key={exercise.id}
          id={exercise.id}
          name={exercise.name}
          sets={exercise.sets}
          reps={exercise.reps}
          lbs={exercise.pounds}
          toggle={toggle}
          toggleEdit={toggleEdit}
        />
      ))}
    </div>
  );
};

export default Exerciselist;
