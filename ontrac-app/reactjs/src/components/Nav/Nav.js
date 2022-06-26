import React from "react";
import Logo from "../../assets/logo-white.png";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import {
  BiDumbbell,
  BiHomeAlt,
  BiCalendarEvent,
  BiUserCircle,
} from "react-icons/bi";
import { IoScaleOutline } from "react-icons/io5";

// import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <Link to="/homepage" className={styles.imgLink}>
        <img src={Logo} alt="logo" className={styles.img} />
      </Link>
      <ul>
        <li className={styles.item}>
          <Link to="/homepage" className={styles.link}>
            <BiHomeAlt size="26" className={styles.icon} />
            Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/exercises" className={styles.link}>
            <BiDumbbell size="26" className={styles.icon} />
            Exercises
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/workouts" className={styles.link}>
            <BiCalendarEvent size="26" className={styles.icon} />
            Workouts
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/weight" className={styles.link}>
            <IoScaleOutline size="26" className={styles.icon} />
            Weight
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/profile" className={styles.link}>
            <BiUserCircle size="26" className={styles.icon} />
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
