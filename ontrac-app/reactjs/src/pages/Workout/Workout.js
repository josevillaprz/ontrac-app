import React, { useState, useEffect } from "react";
import WorkoutList from "../../components/WorkoutList/WorkoutList";
import WorkoutForm from "../../components/WorkoutForm/WorkoutForm";
import styles from "../PageStyles.module.css";
import Nav from "../../components/Nav/Nav";

const Workout = () => {
  const [addWorkout, setAddWorkout] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [workouts, setWorkouts] = useState([]);
  const [exercises, setExercises] = useState([]);
  // const [selectedExercises, setSelectedExercises] = useState([]);
  // const [workoutName, setWorkoutName] = useState("");

  const handleClick = (e) => {
    setAddWorkout(!addWorkout);
  };

  // get workouts with userID
  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch(
        `/workout/all/${localStorage.getItem("userId")}`,
        {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("accessToken"),
          },
          method: "GET",
        }
      );
      const data = await response.json();
      setWorkouts(data);
      setIsLoading(false);
    };
    fetchWorkout();
  }, []);

  // get all exercises
  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch("/exercise/all", {
        headers: {
          "Content-Type": "application/json",
          token: `${localStorage.getItem("accessToken")}`,
        },
        method: "GET",
      });
      const data = await response.json();
      setExercises(data);
    };
    // call function
    fetchExercises();
  }, []);

  // handle post request
  const handleSubmit = async () => {
    //
  };

  return (
    <div className={styles.container}>
      <Nav />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <main className={styles.contentContainer}>
          <h1 className={styles.title}>Workouts</h1>
          {addWorkout ? (
            <WorkoutForm
              clickHandler={handleClick}
              submitHandler={handleSubmit}
              exercises={exercises}
            />
          ) : (
            <WorkoutList clickHandler={handleClick} workouts={workouts} />
          )}
        </main>
      )}
    </div>
  );
};

export default Workout;
