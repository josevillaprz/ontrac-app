import React from "react";
import styles from "./Chart.module.css";

const Chart = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Weight progress</h1>
      {/* will plug in data to url with props */}
      <img
        src="https://quickchart.io/chart?w=800&c=%7B%0A%20%20type%3A%20%27line%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20labels%3A%20%5B%22Apr%2010%22%2C%22Apr%2030%22%2C%22May%2010%22%2C%22May%2025%22%2C%5D%2C%0A%20%20%20%20datasets%3A%20%5B%7B%0A%20%20%20%20%20%20data%3A%20%5B220%2C%20210%2C%20200%2C%20189%5D%2C%0A%20%20%20%20%20%20fill%3A%20false%2C%0A%20%20%20%20%20%20borderColor%3A%20getGradientFillHelper(%27vertical%27%2C%20%5B%27%23eb3639%27%2C%20%27%23a336eb%27%2C%20%27%2336a2eb%27%5D)%2C%0A%20%20%20%20%20%20borderWidth%3A%205%2C%0A%20%20%20%20%20%20pointRadius%3A%200%2C%0A%20%20%20%20%7D%5D%0A%20%20%7D%2C%0A%20%20options%3A%20%7B%0A%20%20%20%20legend%3A%20%7B%0A%20%20%20%20%20%20display%3A%20false%0A%20%20%20%20%7D%2C%0A%09scales%3A%20%7B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
        alt="chart"
        className={styles.img}
      />
    </div>
  );
};

export default Chart;
