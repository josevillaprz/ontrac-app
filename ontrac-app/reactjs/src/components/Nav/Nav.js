import React, { useState } from "react";
import logo from "../../assets/logo-white.png";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import {
  BiDumbbell,
  BiHomeAlt,
  BiCalendarEvent,
  BiUserCircle,
} from "react-icons/bi";
import { IoScaleOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={styles.container}>
      <NavLink to="/homepage">
        <img src={logo} alt="logo" className={styles.logo} />
      </NavLink>
      <button className={styles.toggle} onClick={() => setShowNav(!showNav)}>
        <AiOutlineMenu size={"30"} />
      </button>
      <nav className={showNav ? styles.open : undefined}>
        <NavLink
          to="/homepage"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <BiHomeAlt size="26" className={styles.icon} />
          Home
        </NavLink>
        <NavLink
          to="/exercises"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <BiDumbbell size="26" className={styles.icon} />
          Exercises
        </NavLink>
        <NavLink
          to="/workouts"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <BiCalendarEvent size="26" className={styles.icon} />
          Workouts
        </NavLink>
        <NavLink
          to="/weight"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <IoScaleOutline size="26" className={styles.icon} />
          Weight
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <BiUserCircle size="26" className={styles.icon} />
          Profile
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
