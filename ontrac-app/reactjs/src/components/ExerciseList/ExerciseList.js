import React from "react";
import styles from "./ExerciseList.module.css";
// import { Button } from "@mui/material";
import Exercise from "../Exercise/Exercise";
import EmptyState from "../EmptyState/EmptyState";
import Btn from "../Buttons/Btn";

const Exerciselist = ({ toggle, toggleEdit, exercises, deleteHandler }) => {
  return (
    <section className={styles.container}>
      <Btn
        variant="contained"
        size="large"
        clickHandler={toggle}
        text="Add Exercise"
        className={styles.btn}
      />
      {exercises.length === 0 ? (
        <EmptyState
          title="No Exercises"
          body="You don't have any saved exercises. Start by creating a new exercise. "
        />
      ) : (
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
      )}
    </section>
  );
};

export default Exerciselist;
