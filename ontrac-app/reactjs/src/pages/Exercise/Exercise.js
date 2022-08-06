import React, { useState, useEffect } from "react";
import { GetAllExercises } from "../../utils/api";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import AddExercise from "../../components/AddExercise/AddExercise";
import EditExercise from "../../components/EditExercise/EditExercise";
import styles from "../PageStyles.module.css";
import Nav from "../../components/Nav/Nav";
import Loader from "../../components/Loader/Loader";
import { DeleteExercise } from "../../utils/api";

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

  const DeleteHandler = async (e) => {
    console.log("Deleting exercise...");
    console.log(e.currentTarget.id);
    await DeleteExercise(e.currentTarget.id);
    FetchExercises();
  };

  return (
    <div className={styles.container}>
      <Nav />
      {isLoading ? (
        <main>
          <Loader />
        </main>
      ) : (
        <main>
          {active === "list" && (
            <>
              <h1 className={styles.title}>Exercises</h1>
              <ExerciseList
                toggle={ToggleCreate}
                toggleEdit={ToggleEdit}
                exercises={exercises}
                deleteHandler={DeleteHandler}
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
              <EditExercise toggle={ToggleList} editId={editExerciseId} />
            </>
          )}
        </main>
      )}
    </div>
  );
};

export default Exercise;
