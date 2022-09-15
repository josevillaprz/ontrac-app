import React from "react";
import styles from "./Workout.module.css";
import DeleteBtn from "../Buttons/DeleteBtn";

const Workout = ({ title, exercises, deleteHandler, id }) => {
  return (
    <li className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <DeleteBtn deleteHandler={deleteHandler} id={id} />
      </div>
      <ul>
        {exercises.map((exercise) => (
          <li className={styles.listItem} key={exercise.id}>
            <p>{exercise.name}</p>
            <p>{exercise.reps} reps</p>
            <p>{exercise.sets} sets</p>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Workout;
