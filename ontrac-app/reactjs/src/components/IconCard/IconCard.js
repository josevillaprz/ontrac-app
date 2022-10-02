import React from "react";
import styles from "./IconCard.module.css";

const Iconcard = ({ icon, value, text }) => {
  return (
    <div className={styles.card}>
      {icon}
      <p className={styles.card__text}>{value}</p>
      <p className={styles.card__value}>{text}</p>
    </div>
  );
};

export default Iconcard;
