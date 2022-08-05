import React from "react";
import styles from "./ExerciseList.module.css";
import { Button } from "@mui/material";
import Exercise from "../Exercise/Exercise";

const Exerciselist = ({ toggle, toggleEdit, exercises, deleteHandler }) => {
  return (
    <section className={styles.container}>
      <Button variant="contained" size="large" onClick={toggle}>
        Add exercise
      </Button>
      <ul>
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
            deleteHandler={deleteHandler}
          />
        ))}
      </ul>
    </section>
  );
};

export default Exerciselist;
