import React from "react";
import styles from "./IconCard.module.css";

const Iconcard = ({ icon, value, text }) => {
  return (
    <div className={styles.container}>
      {icon}
      <p className={styles.value}>{value}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Iconcard;
