import React, { useState, useEffect } from "react";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import ExerciseForm from "../../components/ExerciseForm/ExerciseForm";
import styles from "../PageStyles.module.css";
import Nav from "../../components/Nav/Nav";

const Exercise = ({ user }) => {
  const [createExercise, setCreateExercise] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [pounds, setPounds] = useState(0);
  const [note, setNote] = useState("");

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
    setIsLoading(false);
  }, [createExercise]);

  // HANDLERS
  const handleEditClick = (e) => {
    setCreateExercise(!createExercise);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(e);
    // fetch api and create new exercise
    const response = await fetch("/exercise/create", {
      headers: {
        "Content-Type": "application/json",
        token: `${localStorage.getItem("accessToken")}`,
      },
      method: "POST",
      body: JSON.stringify({
        name,
        reps,
        sets,
        pounds,
        note,
      }),
    });
    const data = await response.json();
    console.log(data);
    handleEditClick();

    // fetch the data again displaying the new data
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const repsHandler = (e) => {
    setReps(e.target.value);
  };

  const setsHandler = (e) => {
    setSets(e.target.value);
  };

  const poundsHandler = (e) => {
    setPounds(e.target.value);
  };

  const noteHandler = (e) => {
    setNote(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Nav />
      {isLoading ? (
        <div>Loading...</div> // will be updated to blank state
      ) : (
        <main className={styles.contentContainer}>
          <h1 className={styles.title}>Exercises</h1>
          {createExercise ? (
            <ExerciseForm
              clickHandler={handleEditClick}
              submitHandler={submitHandler}
              nameHandler={nameHandler}
              repsHandler={repsHandler}
              setsHandler={setsHandler}
              poundsHandler={poundsHandler}
              noteHandler={noteHandler}
            />
          ) : (
            <ExerciseList
              clickHandler={handleEditClick}
              exercises={exercises}
            />
          )}
        </main>
      )}
    </div>
  );
};

export default Exercise;
