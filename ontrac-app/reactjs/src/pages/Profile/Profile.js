import React, { useState, useEffect } from "react";
import defaultImg from "../../assets/user-default.png";
import UserHeader from "../../components/UserHeader/UserHeader";
import EditBtn from "../../components/Buttons/EditBtn";
import pageStyles from "../PageStyles.module.css";
import styles from "./Profile.module.css";
import UserDetails from "../../components/UserDetails/UserDetails";
import UserForm from "../../components/UserForm/UserForm";
import Nav from "../../components/Nav/Nav";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../utils/api";

// test data
const user = {
  avatar: defaultImg,
  name: "jane doe",
  email: "test@example.com",
};
const Profile = ({ toggleLogin }) => {
  const [editUser, setEditUser] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    let data = await getUser();
    setUserData(data);
  };

  const handleClick = (e) => {
    setEditUser(!editUser);
  };

  const navigate = useNavigate();

  const logoutHandler = (e) => {
    localStorage.clear();
    toggleLogin();
    navigate("/");
  };

  return (
    <div className={pageStyles.container}>
      <Nav />
      <main className={pageStyles.contentContainer}>
        <h1 className={pageStyles.title}>Profile</h1>
        <section className={styles.section}>
          <div className={styles.headerContainer}>
            <UserHeader
              heading={`${userData.firstName} ${userData.lastName}`}
              subText={userData.email}
            />
            <EditBtn toggleEdit={handleClick} />
          </div>
          {editUser ? <UserForm /> : <UserDetails />}
          <Button
            variant="contained"
            size="large"
            style={styles.btn}
            onClick={logoutHandler}
          >
            Logout
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Profile;
