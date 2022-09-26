import React from "react";
import styles from "./Chart.module.css";
import ChartJs from "chart.js/auto";
import { Line } from "react-chartjs-2";

const Chart = ({ chartData }) => {
  const convertDate = (stringDate) => {
    let date = new Date(stringDate);
    let day = date.getDate();
    let month = date.toLocaleString("default", { month: "short" });
    return `${month} ${day}`;
  };

  ChartJs.register();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Weight Progress",
      },
    },
  };

  const data = {
    labels: chartData.map((el) => convertDate(el.createdAt)),
    datasets: [
      {
        label: "Pounds - lb",
        data: chartData.map((el) => el.pounds),
        backgroundColor: "#faa386",
        borderColor: "#F58861",
      },
    ],
  };
  return (
    <div className={styles.container}>
      <Line data={data} options={options} updateMode="resize" />
    </div>
  );
};

export default Chart;
