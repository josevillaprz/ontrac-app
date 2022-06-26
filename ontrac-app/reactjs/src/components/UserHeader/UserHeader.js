import React from "react";
import Avatar from "../Avatar/Avatar";
import styles from "./UserHeader.module.css";

const UserHeader = ({ heading, subText = "" }) => {
  return (
    <div className={styles.container}>
      <Avatar />
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>{heading}</h1>
        {subText !== "" && <p className={styles.subText}>{subText}</p>}
      </div>
    </div>
  );
};

export default UserHeader;
