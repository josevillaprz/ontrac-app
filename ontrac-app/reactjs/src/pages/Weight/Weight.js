import React, { useState, useEffect } from "react";
import Chart from "../../components/Chart/Chart";
import WeightList from "../../components/WeightList/WeightList";
import styles from "../PageStyles.module.css";
import WeightForm from "../../components/WeightForm/WeightForm";
import Nav from "../../components/Nav/Nav";
import Loader from "../../components/Loader/Loader";
import { CreateWeight, GetWeights, DeleteWeight } from "../../utils/api";

const Weight = () => {
  const [addWeight, setAddWeight] = useState(false);
  const [weightData, setWeightData] = useState([]);
  const [inputWeight, setInputWeight] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchWeights();
  }, [addWeight]);

  const fetchWeights = async () => {
    setIsLoading(true);
    let data = await GetWeights();
    setWeightData(data);
    setIsLoading(false);
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

  const deleteHandler = async (e) => {
    let id = e.currentTarget.parentElement.getAttribute("data-id");
    await DeleteWeight(id);
    fetchWeights();
  };

  return (
    <div className={styles.container}>
      <Nav />
      {isLoading ? (
        <Loader />
      ) : (
        <main className={styles.contentContainer}>
          <h1 className={styles.title}>Weight</h1>
          {/* {weightData.length !== 0 && <Chart chartData={weightData} />} */}
          <Chart chartData={weightData} />
          {addWeight ? (
            <WeightForm
              clickHandler={handleClick}
              submitHandler={handleSubmit}
              changeHandler={changeHandler}
            />
          ) : (
            <WeightList
              clickHandler={handleClick}
              data={weightData}
              deleteHandler={deleteHandler}
            />
          )}
        </main>
      )}
    </div>
  );
};

export default Weight;
