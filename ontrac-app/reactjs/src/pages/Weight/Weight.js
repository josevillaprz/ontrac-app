import React, { useState } from "react";
import Chart from "../../components/Chart/Chart";
import WeightList from "../../components/WeightList/WeightList";
import styles from "../PageStyles.module.css";
import WeightForm from "../../components/WeightForm/WeightForm";
import Nav from "../../components/Nav/Nav";

const Weight = () => {
  const [addWeight, setAddWeight] = useState(false);

  const handleClick = (e) => {
    setAddWeight(!addWeight);
  };

  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.contentContainer}>
        <h1 className={styles.title}>Weight</h1>
        <Chart />
        {addWeight ? (
          <WeightForm clickHandler={handleClick} />
        ) : (
          <WeightList clickHandler={handleClick} />
        )}
      </main>
    </div>
  );
};

export default Weight;
