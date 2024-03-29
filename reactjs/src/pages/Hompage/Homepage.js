import React, { useState, useEffect } from "react";
import UserHeader from "../../components/UserHeader/UserHeader";
// import Chart from "../../components/Chart/Chart";
import IconCard from "../../components/IconCard/IconCard";
import homeStyles from "./Homepage.module.css";
import styles from "../PageStyles.module.css";
import { BiDumbbell, BiCalendarEvent } from "react-icons/bi";
import Nav from "../../components/Nav/Nav";
import Loader from "../../components/Loader/Loader";

const Homepage = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user from API
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("/user", {
        headers: {
          "Content-Type": "application/json",
          token: `${localStorage.getItem("accessToken")}`,
        },
        method: "GET",
      });
      const data = await response.json();
      setUser(data);
      setIsLoading(false);
    };
    // invoke function
    fetchUser();
  }, []);

  return (
    <div className={styles.container}>
      <Nav />
      {isLoading ? (
        <main>
          <Loader />
        </main>
      ) : (
        <main>
          <UserHeader heading={`Welcome back, ${user.firstName}.`} />
          <h2 className={homeStyles.h2}>Your activity</h2>
          <div className={homeStyles.cardGroup}>
            <IconCard
              value={user.Exercises.length}
              text="Exercise"
              icon={<BiDumbbell size={60} color={"#fff"} />}
            />
            <IconCard
              value={user.Workouts.length}
              text="Workouts"
              icon={<BiCalendarEvent size={60} color={"#fff"} />}
            />
          </div>
          {/* <Chart /> */}
        </main>
      )}
    </div>
  );
};

export default Homepage;
