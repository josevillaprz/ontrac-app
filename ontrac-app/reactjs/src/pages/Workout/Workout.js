import React, { useState, useEffect } from "react";
import WorkoutList from "../../components/WorkoutList/WorkoutList";
import WorkoutForm from "../../components/WorkoutForm/WorkoutForm";
import styles from "../PageStyles.module.css";
import Nav from "../../components/Nav/Nav";
import Loader from "../../components/Loader/Loader";
import { GetUserWorkouts, GetAllExercises } from "../../utils/api";

const Workout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [workouts, setWorkouts] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [active, setActive] = useState("list");
  const [inputData, setInputData] = useState({
    userId: 1,
    name: "",
    exerciseIds: [],
  });

  const toggleList = (e) => {
    if (active === "list") {
      setActive("create");
    } else {
      setActive("list");
      setInputData({
        name: "",
        exerciseIds: [],
      });
    }
  };

  const exerciseChangeHandler = (e) => {
    setInputData({
      ...inputData,
      exerciseIds: [...inputData.exerciseIds, e.target.value],
    });
  };

  const nameChangeHandler = (e) => {
    setInputData({ ...inputData, name: e.target.value });
  };

  const fetchWorkout = async () => {
    const data = await GetUserWorkouts(localStorage.getItem("userId"));
    setWorkouts(data);
    console.log(data);
  };

  const fetchExercises = async () => {
    const data = await GetAllExercises();
    setExercises(data);
  };

  useEffect(() => {
    fetchWorkout();
    fetchExercises();
    setIsLoading(false);
  }, []);

  // handle post request
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("/workout/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        token: `${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(inputData),
    });
    if (!response.ok) {
      console.log("Something went wrong creating workout");
    }
    console.log("Workout Created");
    toggleList();
    fetchWorkout();
  };

  return (
    <div className={styles.container}>
      <Nav />
      {isLoading ? (
        <Loader />
      ) : (
        <main className={styles.contentContainer}>
          {active === "list" && (
            <>
              <h1 className={styles.title}>Workouts</h1>
              <WorkoutList workouts={workouts} clickHandler={toggleList} />
            </>
          )}
          {active === "create" && (
            <>
              <h1 className={styles.title}>Create Workout</h1>
              <WorkoutForm
                clickHandler={toggleList}
                submitHandler={submitHandler}
                exercises={exercises}
                exerciseChangeHandler={exerciseChangeHandler}
                nameChangeHandler={nameChangeHandler}
              />
            </>
          )}
        </main>
      )}
    </div>
  );
};

export default Workout;
