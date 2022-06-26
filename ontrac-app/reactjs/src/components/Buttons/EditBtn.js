import React from "react";
import { VscEdit } from "react-icons/vsc";
import styles from "./EditBtn.module.css";

const EditBtn = ({ clickHandler }) => {
  return (
    <button onClick={clickHandler} type="button" className={styles.container}>
      <VscEdit size="26" className={styles.icon} />
    </button>
  );
};

export default EditBtn;
