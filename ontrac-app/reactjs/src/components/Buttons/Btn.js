import React from "react";
import { Button } from "@mui/material";
import styles from "./Btn.module.css";

const Btn = ({ variant, fullWidth, type, text, clickHandler }) => {
  return (
    <>
      <Button
        variant={variant}
        size="large"
        fullWidth={fullWidth}
        type={type}
        className={styles.btn}
        onClick={clickHandler}
      >
        {text}
      </Button>
    </>
  );
};

export default Btn;
