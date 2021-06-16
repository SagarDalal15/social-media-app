import React, { useContext } from "react";
import { SignInBtn } from "../../components";
import { UserContext } from "../../contexts/user";
import "./style.css";
import { logout } from "../../services/auth";
import { useHistory } from "react-router-dom";
import DarkModeBtn from "../../components/darkmode-btn";
import { DarkModeContext } from "../../contexts/darkmode";
import appicon from "../../res/appicon2.svg";

export default function Navbar() {
  const [user, setUser] = useContext(UserContext).user;
  const [DarkMode, setDarkMode] = useContext(DarkModeContext).DarkMode;
  const history = useHistory();
  const logMeOut = async () => {
    let logMeOut = await logout();
  };
  if (!user) {
    history.push("./");
  }
  var navbarCss = "navbar";
  if (DarkMode) {
    navbarCss = "navbar dark";
  }

  return (
    <div className={navbarCss}>
      <div className="heading">
        <img
          style={{ height: "40px", marginRight: "10px" }}
          src={appicon}
        ></img>
        Say it Social
        <div className="navbar-darkmode">
          <DarkModeBtn />
        </div>
      </div>

      {user ? (
        <div onClick={logMeOut} className="logged-in">
          <img className="navbar__img" src={user.photoURL} />
          Log out
        </div>
      ) : (
        <SignInBtn />
      )}
    </div>
  );
}
