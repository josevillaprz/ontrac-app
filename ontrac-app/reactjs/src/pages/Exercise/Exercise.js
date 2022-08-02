import React, { useState, useEffect } from "react";
import { GetAllExercises } from "../../utils/api";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import AddExercise from "../../components/AddExercise/AddExercise";
import EditExercise from "../../components/EditExercise/EditExercise";
import styles from "../PageStyles.module.css";
import Nav from "../../components/Nav/Nav";

const Exercise = ({ user }) => {
  const [active, setActive] = useState("list");
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editExerciseId, setEditExerciseId] = useState(0);

  const FetchExercises = async () => {
    const data = await GetAllExercises();
    setExercises(data);
    setIsLoading(false);
  };

  useEffect(() => {
    FetchExercises();
  }, [active]);

  const ToggleCreate = (e) => {
    setActive("create");
  };

  const ToggleList = (e) => {
    setActive("list");
  };

  const ToggleEdit = (e) => {
    setEditExerciseId(e.currentTarget.id);
    setActive("edit");
  };

  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.contentContainer}>
        {active === "list" && (
          <>
            <h1 className={styles.title}>Exercises</h1>
            <ExerciseList
              toggle={ToggleCreate}
              toggleEdit={ToggleEdit}
              exercises={exercises}
            />
          </>
        )}
        {active === "create" && (
          <>
            <h1 className={styles.title}>Add exercise</h1>
            <AddExercise toggle={ToggleList} />
          </>
        )}
        {active === "edit" && (
          <>
            <h1 className={styles.title}>Edit exercise</h1>
            <EditExercise
              toggle={ToggleList}
              editId={editExerciseId}
              fetch={FetchExercises}
            />
          </>
        )}
      </main>
    </div>
  );
};

export default Exercise;
