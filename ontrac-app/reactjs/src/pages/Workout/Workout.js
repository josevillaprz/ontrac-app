import React, { useState, useEffect } from "react";
import WorkoutList from "../../components/WorkoutList/WorkoutList";
import WorkoutForm from "../../components/WorkoutForm/WorkoutForm";
import styles from "../PageStyles.module.css";
import Nav from "../../components/Nav/Nav";
import Loader from "../../components/Loader/Loader";
import {
  GetUserWorkouts,
  GetAllExercises,
  CreateWorkout,
  DeleteWorkout,
} from "../../utils/api";

const Workout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [workouts, setWorkouts] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [active, setActive] = useState("list");
  const [toggleFetch, setToggleFetch] = useState(false);
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
  };

  const fetchExercises = async () => {
    const data = await GetAllExercises();
    setExercises(data);
  };

  useEffect(() => {
    fetchWorkout();
    fetchExercises();
    setIsLoading(false);
  }, [toggleFetch]);

  // handle post request
  const submitHandler = async (e) => {
    e.preventDefault();
    await CreateWorkout(inputData);
    toggleList();
    setToggleFetch(!toggleFetch);
  };

  const deleteHandler = async (e) => {
    await DeleteWorkout(e.currentTarget.id);
    setToggleFetch(!toggleFetch);
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
              <WorkoutList
                workouts={workouts}
                clickHandler={toggleList}
                deleteHandler={deleteHandler}
              />
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
