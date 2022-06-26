import React from "react";
import styles from "./Exercise.module.css";
import EditBtn from "../Buttons/EditBtn";

const Exercise = ({ name, sets, reps, lbs }) => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.numbers}>
          {sets} sets · {reps} reps · {lbs} lbs
        </p>
      </div>
      <EditBtn />
    </div>
  );
};

export default Exercise;
