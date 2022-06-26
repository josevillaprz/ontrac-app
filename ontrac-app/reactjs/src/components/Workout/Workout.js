import React from "react";
import styles from "./Workout.module.css";
import EditBtn from "../Buttons/EditBtn";

const Workout = ({ title, exercises }) => {
  return (
    <li className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <EditBtn />
      </div>
      <ul>
        {exercises.map((exercise) => (
          <li className={styles.listItem}>
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
