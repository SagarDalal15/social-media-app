import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { SignInBtn } from "../../components";
import { UserContext } from "../../contexts/user";
import "./style.css";
import Navbar from "../../containers/navbar";
import AuthForm from "../../components/authForm";
import { DarkModeContext } from "../../contexts/darkmode";

export function LoginPage() {
  const [user, setUser] = useContext(UserContext).user;
  const history = useHistory();

  const [DarkMode, setDarkMode] = useContext(DarkModeContext).DarkMode;
  let loginpageInnerCSS = "loginpage-inner";
  let loginpageTitleCSS = "loginpage-title";
  let loginpageCardCSS = "loginpage-card";

  if (DarkMode) {
    loginpageInnerCSS = "loginpage-inner dark";
    loginpageTitleCSS = "loginpage-title dark";
    loginpageCardCSS = "loginpage-card dark";
  }

  return (
    <div className="loginpage">
      <Navbar />
      <div className={loginpageInnerCSS}>
        <div className={loginpageTitleCSS}>
          Share your stories here! <br />
          Sign up Now!
        </div>
        <Card className={loginpageCardCSS}>
          <Card.Body className="loginpage-card-body">
            <AuthForm />
            <Card.Text className="loginpage-card-text">
              Sign in with Google:
            </Card.Text>
            <div className="loginpage-signinbtn">
              <SignInBtn />
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
