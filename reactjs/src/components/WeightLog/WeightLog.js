import React from "react";
import styles from "./WeightLog.module.css";
import DeleteBtn from "../Buttons/DeleteBtn";

const Weightlog = ({ weight, date, deleteHandler, id }) => {
  return (
    <li className={styles.container} data-id={id}>
      <div className={styles.detailsContainer}>
        <p className={styles.weight}>
          <span className={styles.label}>Weight: </span>
          {weight} lbs
        </p>
        <p className={styles.date}>Date: {date}</p>
      </div>
      <DeleteBtn deleteHandler={deleteHandler} />
    </li>
  );
};

export default Weightlog;
