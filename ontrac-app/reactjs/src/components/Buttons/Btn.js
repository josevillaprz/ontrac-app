import React from "react";
import { Button } from "@mui/material";
import styles from "./Btn.module.css";

const Btn = (props) => {
  return (
    <>
      <Button
        variant={props.variant}
        size="large"
        fullWidth={props.fullWidth}
        type={props.type}
        className={styles.btn}
      >
        {props.text}
      </Button>
    </>
  );
};

export default Btn;
