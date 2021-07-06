import React, { useContext } from "react";
import { UserContext } from "../../contexts/user";
import "./style.css";
import { logout } from "../../services/auth";
import { useHistory } from "react-router-dom";
import DarkModeBtn from "../../components/darkmode-btn";
import { DarkModeContext } from "../../contexts/darkmode";
import appicon from "../../res/appicon2.svg";
import blankProfile from "../../res/blank-profile.webp";

export default function Navbar() {
  const [user, setUser] = useContext(UserContext).user;
  const [DarkMode, setDarkMode] = useContext(DarkModeContext).DarkMode;
  const history = useHistory();

  const logMeOut = async () => {
    let logMeOut = await logout();
    if (logMeOut) {
      localStorage.removeItem("user");
      history.push(process.env.PUBLIC_URL + "/");
    }
  };

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
        Social App
        <div className="navbar-darkmode">
          <DarkModeBtn />
        </div>
      </div>

      {user && user.photoURL ? (
        <div onClick={logMeOut} className="logged-in">
          <img className="navbar__img" src={user.photoURL} />
          Log out
        </div>
      ) : (
        user && (
          <div onClick={logMeOut} className="logged-in">
            <img className="navbar__img" src={blankProfile} />
            Log out
          </div>
        )
      )}
    </div>
  );
}
