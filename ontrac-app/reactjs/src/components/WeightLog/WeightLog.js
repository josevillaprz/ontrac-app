import React from "react";
import styles from "./WeightLog.module.css";
import EditBtn from "../Buttons/EditBtn";

const Weightlog = ({ weight, date }) => {
  return (
    <li className={styles.container}>
      <div className={styles.detailsContainer}>
        <p className={styles.weight}>
          <span className={styles.label}>Weight: </span>
          {weight} lbs
        </p>
        <p className={styles.date}>Date: {date}</p>
      </div>
      <EditBtn />
    </li>
  );
};

export default Weightlog;
