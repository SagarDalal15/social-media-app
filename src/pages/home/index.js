import React, { useContext } from "react";
import "./style.css";
import { CreatePost, Navbar } from "../../containers";
import Feed from "../../containers/feed";
import { DarkModeContext } from "../../contexts/darkmode";

export default function Home() {
  const [DarkMode, setDarkMode] = useContext(DarkModeContext).DarkMode;
  var homeCss = "home";
  if (DarkMode) {
    homeCss = "home dark";
  }
  return (
    <div className={homeCss}>
      <Navbar />
      <CreatePost />
      <Feed />
    </div>
  );
}
