import React, { useState, useEffect } from "react";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import AddExercise from "../../components/AddExercise/AddExercise";
import EditExercise from "../../components/EditExercise/EditExercise";
import styles from "../PageStyles.module.css";
import Nav from "../../components/Nav/Nav";

const Exercise = ({ user }) => {
  const [active, setActive] = useState("list");
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editExerciseId, setEditExerciseId] = useState(0);
  // const [inputData, setInputdata] = useState({
  //   name: "",
  //   sets: 0,
  //   reps: 0,
  //   pounds: 0,
  //   note: "",
  // });

  const fetchExercises = async () => {
    setIsLoading(true);
    const response = await fetch("/exercise/all", {
      headers: {
        "Content-Type": "application/json",
        token: `${localStorage.getItem("accessToken")}`,
      },
      method: "GET",
    });
    const data = await response.json();
    setExercises(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  const toggleCreate = (e) => {
    setActive("create");
  };

  const toggleList = (e) => {
    setActive("list");
  };

  const toggleEdit = (e) => {
    setEditExerciseId(e.currentTarget.id);
    setActive("edit");
  };

  // const createExercise = async (e) => {
  //   e.preventDefault();
  //   // fetch api and create new exercise
  //   const response = await fetch("/exercise/create", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       token: `${localStorage.getItem("accessToken")}`,
  //     },
  //     method: "POST",
  //     body: JSON.stringify(inputData),
  //   });
  //   if (response.ok) {
  //     console.log("Request succeeded");
  //   }
  //   fetchExercises();
  //   toggleList();
  // };

  const updateExercise = (e) => {
    e.preventDefault();
    console.log("running update");
    toggleList();
  };

  // const changeHandler = (e) => {
  //   const value = e.target.value;
  //   setInputdata({ ...inputData, [e.target.name]: value });
  // };

  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.contentContainer}>
        {active === "list" && (
          <>
            <h1 className={styles.title}>Exercises</h1>
            <ExerciseList
              toggle={toggleCreate}
              toggleEdit={toggleEdit}
              exercises={exercises}
            />
          </>
        )}
        {active === "create" && (
          <>
            <h1 className={styles.title}>Add exercise</h1>
            <AddExercise toggle={toggleList} />
          </>
        )}
        {active === "edit" && (
          <>
            <h1 className={styles.title}>Edit exercise</h1>
            <EditExercise toggle={toggleList} editId={editExerciseId} />
          </>
        )}
      </main>
    </div>
  );
};

export default Exercise;
