import React, { useState, useEffect } from "react";
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
import Loader from "../../components/Loader/Loader";

// test data
const Profile = ({ toggleLogin }) => {
  const [editUser, setEditUser] = useState(false);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputData, setInputData] = useState({
    // firstName: userData.firstName,
    // lastname: userData.lastName,
    // // email: userData.email,
    // firstName: "userData.firstName",
    // lastName: "userData.lastName",
    // email: "userData.email",
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    setIsLoading(true);
    let data = await getUser();
    setUserData(data);
    setIsLoading(false);
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

  const changeHandler = (e) => {
    let data = {
      ...inputData,
      [e.target.name]: e.target.value,
    };
    setInputData(data);
    console.log(data);
  };

  return (
    <div className={pageStyles.container}>
      <Nav />
      {isLoading ? (
        <Loader />
      ) : (
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
            {editUser ? (
              <UserForm
                toggleEdit={handleClick}
                changeHandler={changeHandler}
                data={userData}
              />
            ) : (
              <UserDetails data={userData} />
            )}
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
      )}
    </div>
  );
};

export default Profile;
