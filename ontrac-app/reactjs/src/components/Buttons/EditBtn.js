import React from "react";
import { VscEdit } from "react-icons/vsc";
import styles from "./EditBtn.module.css";

const EditBtn = ({ id, toggleEdit }) => {
  return (
    <button
      id={id}
      onClick={toggleEdit}
      type="button"
      className={styles.container}
    >
      <VscEdit size="26" className={styles.icon} />
    </button>
  );
};

export default EditBtn;
