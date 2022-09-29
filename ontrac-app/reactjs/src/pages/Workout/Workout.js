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
  const [isLoading, setIsLoading] = useState(false);
  const [workouts, setWorkouts] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [active, setActive] = useState("list");
  const [toggleFetch, setToggleFetch] = useState(false);
  const [inputData, setInputData] = useState({
    userId: 1,
    name: "",
    exerciseIds: [],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const workoutData = await GetUserWorkouts(localStorage.getItem("userId"));
    const exerciseData = await GetAllExercises();
    setWorkouts(workoutData);
    setExercises(exerciseData);
    setIsLoading(false);
  };

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
