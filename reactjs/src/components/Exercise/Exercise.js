import React from "react";
import styles from "./Exercise.module.css";
import EditBtn from "../Buttons/EditBtn";
import DeleteBtn from "../Buttons/DeleteBtn";

const Exercise = ({
  id,
  name,
  sets,
  reps,
  lbs,
  toggle,
  toggleEdit,
  deleteHandler,
}) => {
  return (
    <li className={styles.container}>
      <div>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.numbers}>
          {sets} sets · {reps} reps · {lbs} lbs
        </p>
      </div>
      <div className={styles.btnGroup}>
        <DeleteBtn deleteHandler={deleteHandler} id={id} />
        <EditBtn toggleEdit={toggleEdit} id={id} />
      </div>
    </li>
  );
};

export default Exercise;
