import React, { useState, useEffect } from "react";
import EditBtn from "../../components/Buttons/EditBtn";
import pageStyles from "../PageStyles.module.css";
import styles from "./Profile.module.css";
import UserDetails from "../../components/UserDetails/UserDetails";
import UserForm from "../../components/UserForm/UserForm";
import Nav from "../../components/Nav/Nav";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getUser, updateUser } from "../../utils/api";
import Loader from "../../components/Loader/Loader";
import Avatar from "../../components/Avatar/Avatar";

// test data
const Profile = ({ toggleLogin }) => {
  const [editUser, setEditUser] = useState(false);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [inputData, setInputData] = useState({});

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
    // reset input data
    setInputData({});
    // toggle edit state for conditional rendering
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
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (Object.entries(inputData).length === 0) {
      console.log("nothing to update");
    } else {
      console.log(inputData);
      await updateUser(inputData, userData.id);
      fetchUser();
      setEditUser(!editUser);
    }
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
              <div className={styles.headerName}>
                <Avatar />
                <div>
                  <h2>{`${userData.firstName} ${userData.lastName}`}</h2>
                  <p>{userData.email}</p>
                </div>
              </div>
              <EditBtn toggleEdit={handleClick} />
            </div>
            {editUser ? (
              <UserForm
                toggleEdit={handleClick}
                changeHandler={changeHandler}
                submitHandler={submitHandler}
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
