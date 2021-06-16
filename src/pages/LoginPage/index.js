import React, { useContext } from "react";
import { SignInBtn } from "../../components";
import { UserContext } from "../../contexts/user";
import { useHistory } from "react-router-dom";
import "./style.css";
import { Card } from "react-bootstrap";
import appicon from "../../res/appicon.svg";
import appicon2 from "../../res/appicon2.svg";

export function LoginPage() {
  const [user, setUser] = useContext(UserContext).user;
  const history = useHistory();
  if (user) {
    history.push("./home");
  }

  return (
    <div className="loginpage">
      <div className="loginpage-header">
        <div className="loginpage-heading">
          <img
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "12px",
              marginRight: "20px",
            }}
            src={appicon}
          ></img>
          Say it Social
        </div>
      </div>
      <div className="loginpage-inner">
        <div className="loginpage-title">
          <div className="loginpage-icon">
            <Card.Img
              style={{ width: "200px", marginTop: "40px" }}
              src={appicon2}
            ></Card.Img>
          </div>{" "}
          Say it Social
        </div>
        <Card className="loginpage-card">
          <Card.Body>
            <Card.Text className="loginpage-card-text">
              Sign in with Google:
            </Card.Text>
            <div className="loginpage-signinbtn">
              <SignInBtn />
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="loginpage-footer">Developed by Sagar Dalal</div>
    </div>
  );
}
