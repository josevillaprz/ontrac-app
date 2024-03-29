import React from "react";
import styles from "./WeightList.module.css";
import { Button } from "@mui/material";
import WeightLog from "../WeightLog/WeightLog";
import EmptyState from "../EmptyState/EmptyState";

const Weightlist = ({ clickHandler, data, deleteHandler }) => {
  const convertDate = (stringDate) => {
    //"2022-09-24 20:41:24";
    // converts to 09/24/2022
    let formatedDate = stringDate.slice(0, 10).split("-");
    formatedDate.push(formatedDate.shift());
    return formatedDate.join("/");
  };

  return (
    <div className={styles.container}>
      <Button onClick={clickHandler} variant="contained" size="large">
        Log Weight
      </Button>
      {data.length === 0 ? (
        <EmptyState
          title="No weights logged"
          body="Start tracking your body weight goals by logging a weight."
        />
      ) : (
        <ul>
          {data.map((weight) => (
            <WeightLog
              key={weight.id}
              weight={weight.pounds}
              date={convertDate(weight.createdAt)}
              deleteHandler={deleteHandler}
              id={weight.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Weightlist;
