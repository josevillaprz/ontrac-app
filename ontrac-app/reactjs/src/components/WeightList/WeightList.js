import React from "react";
import styles from "./WeightList.module.css";
import { Button } from "@mui/material";
import WeightLog from "../WeightLog/WeightLog";

const Weightlist = ({ clickHandler }) => {
  return (
    <div className={styles.container}>
      <Button onClick={clickHandler} variant="contained" size="large">
        Log Weight
      </Button>
      <ul>
        {/* <WeightLog weight="180" date="5/5/2022" />
        <WeightLog weight="180" date="5/5/2022" />
        <WeightLog weight="180" date="5/5/2022" />
        <WeightLog weight="180" date="5/5/2022" /> */}
      </ul>
    </div>
  );
};

export default Weightlist;
