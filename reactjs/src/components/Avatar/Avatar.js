import React from "react";
import defaultImg from "../../assets/user-default.png";
import styles from "./Avatar.module.css";

// test image url
const user = {
  avatar: defaultImg,
  name: "jane doe",
  email: "test@example.com",
};

const Avatar = (props) => {
  return (
    <>
      <img src={user.avatar} alt="profile" className={styles.img} />
    </>
  );
};

export default Avatar;
