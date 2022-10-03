import React from "react";
import Avatar from "../Avatar/Avatar";
import styles from "./UserHeader.module.css";

const UserHeader = ({ heading, subText = "" }) => {
  return (
    <div className={styles.card}>
      <Avatar />
      <h1 className={styles.card__heading}>{heading}</h1>
    </div>
  );
};

export default UserHeader;
