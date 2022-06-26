import React from "react";
import defaultImg from "../../assets/user-default.png";

// test image url
const user = {
  avatar: defaultImg,
  name: "jane doe",
  email: "test@example.com",
};

const Avatar = (props) => {
  return (
    <>
      <img src={user.avatar} alt="profile" style={styles.img} />
    </>
  );
};

export default Avatar;

const styles = {
  img: {
    borderRadius: "50%",
    objectFit: "cover",
    width: "140px",
    height: "140px",
    marginRight: "30px",
    boxShadow: "0 6px 8px #D0D8E8",
  },
};
