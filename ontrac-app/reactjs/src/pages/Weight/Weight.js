import React, { useState, useEffect } from "react";
import Chart from "../../components/Chart/Chart";
import WeightList from "../../components/WeightList/WeightList";
import styles from "../PageStyles.module.css";
import WeightForm from "../../components/WeightForm/WeightForm";
import Nav from "../../components/Nav/Nav";
import { CreateWeight, GetWeights } from "../../utils/api";

const Weight = () => {
  const [addWeight, setAddWeight] = useState(false);
  const [weightData, setWeightData] = useState([]);
  const [inputWeight, setInputWeight] = useState(0);

  useEffect(() => {
    fetchWeights();
  }, [addWeight]);

  const fetchWeights = async () => {
    let data = await GetWeights();
    setWeightData(data);
  };

  const handleClick = (e) => {
    setAddWeight(!addWeight);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // post pounds and userId
    await CreateWeight(inputWeight);
    setAddWeight(false);
  };

  const changeHandler = (e) => {
    setInputWeight(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.contentContainer}>
        <h1 className={styles.title}>Weight</h1>
        {/* NEED TO SHOW EMPTY STATE ON CHART NOT HERE */}
        {/* FINISH READ AND CREATE*/}
        {weightData.length !== 0 ? <Chart /> : "NO WEIGHTS"}
        {addWeight ? (
          <WeightForm
            clickHandler={handleClick}
            submitHandler={handleSubmit}
            changeHandler={changeHandler}
          />
        ) : (
          <WeightList clickHandler={handleClick} data={weightData} />
        )}
      </main>
    </div>
  );
};

export default Weight;
