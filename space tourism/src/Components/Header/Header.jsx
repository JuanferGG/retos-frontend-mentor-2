import React from "react";
import { motion } from 'framer-motion'

import { Link, useLocation } from "react-router-dom";

import "./Header.css";
import { DropDown } from "./DropDown/DropDown";

export const Header = () => {
  const location = useLocation();

  return (
    <>
      <motion.header
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 800 }}
        transition={{ duration: 1 }}
      >
        <ul>
          <li className={location.pathname == "/" ? "active" : ""}>
            <Link to="/">00 HOME</Link>
          </li>
          <li className={location.pathname == "/destination" ? "active" : ""}>
            <Link className={``} to="/destination">
              01 DESTINATION
            </Link>
          </li>
          <li className={location.pathname == "/crew" ? "active" : ""}>
            <Link className={``} to="/crew">
              02 CREW
            </Link>
          </li>
          <li className={location.pathname == "/technology" ? "active" : ""}>
            <Link className={``} to="/technology">
              03 TECHNOLOGY
            </Link>
          </li>
        </ul>
      </motion.header>
      <DropDown />
      </>
  );
};
