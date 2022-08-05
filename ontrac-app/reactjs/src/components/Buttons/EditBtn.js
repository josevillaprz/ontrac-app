import React from "react";
import { MdEdit } from "react-icons/md";
import styles from "./styles.module.css";

const EditBtn = ({ id, toggleEdit }) => {
  return (
    <button
      id={id}
      onClick={toggleEdit}
      className={`${styles.container} ${styles.edit}`}
    >
      <MdEdit size="20" className={styles.icon} />
    </button>
  );
};

export default EditBtn;
