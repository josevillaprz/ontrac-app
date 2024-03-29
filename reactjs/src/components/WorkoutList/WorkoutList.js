import React from "react";
import Workout from "../Workout/Workout";
// import Btn from "../Buttons/Btn";
import styles from "./WorkoutList.module.css";
import { Grid, Button } from "@mui/material";
import EmptyState from "../EmptyState/EmptyState";

const Workoutlist = ({ clickHandler, workouts, deleteHandler }) => {
  return (
    <section className={styles.container}>
      <Button
        variant="contained"
        size="large"
        sx={{ mb: 4 }}
        onClick={clickHandler}
      >
        Add Workout
      </Button>
      {workouts.length === 0 ? (
        <EmptyState
          body="You don't have any saved workouts. Start by creating a new work out
        from your saved exercise."
          title="No workouts"
        />
      ) : (
        <Grid container spacing={3} className={styles.listContainer}>
          {workouts.map((workout) => (
            <Grid item xs={12} md={6} key={workout.id}>
              <Workout
                title={workout.name}
                exercises={workout.Exercises}
                className={styles.listItem}
                deleteHandler={deleteHandler}
                id={workout.id}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </section>
  );
};

export default Workoutlist;
