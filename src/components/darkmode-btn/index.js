import React, { useState, useContext } from "react";
import "./style.css";
import { IconButton } from "@material-ui/core";
import darkmodeicon from "../../res/sun.svg";
import darkmodeOnIcon from "../../res/moon.svg";
import { DarkModeContext } from "../../contexts/darkmode";

export default function DarkModeBtn() {
  const [DarkMode, setDarkMode] = useContext(DarkModeContext).DarkMode;
  var darkmodeImg = "darkmodebtn-image";
  const darkmodeHandler = () => {
    darkmodeImg = "darkmodebtn-image dark";

    setDarkMode(!DarkMode);
  };
  return (
    <div className="darkmode-btn">
      <IconButton onClick={darkmodeHandler} className="darkmodebtn-icon">
        <img
          className={darkmodeImg}
          src={DarkMode ? darkmodeOnIcon : darkmodeicon}
        ></img>
      </IconButton>
    </div>
  );
}
