import React from "react";
import Workout from "../Workout/Workout";
// import Btn from "../Buttons/Btn";
import styles from "./WorkoutList.module.css";
import { Grid, Button } from "@mui/material";

const Workoutlist = ({ clickHandler, workouts }) => {
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
      <Grid container spacing={3} className={styles.listContainer}>
        {workouts.map((workout) => (
          <Grid item xs={12} md={6} key={workout.id}>
            <Workout
              title={workout.name}
              exercises={workout.Exercises}
              className={styles.listItem}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Workoutlist;
