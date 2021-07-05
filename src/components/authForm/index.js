import React, { useState, useContext } from "react";
import {
  Divider,
  Button,
  TextField,
  withStyles,
  DialogActions,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import NotificationContext from "../../contexts/notification-context";
import { signInWithEmail, signUpWithEmail } from "../../services/auth";
import { UserContext } from "../../contexts/user";
import { DarkModeContext } from "../../contexts/darkmode";
import "./style.css";

let rootColor = "#C3C4C4";
let otherColors = "rgb(68, 127, 255)";

let CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: otherColors,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: otherColors,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: rootColor,
      },
      "&:hover fieldset": {
        borderColor: otherColors,
      },
      "&.Mui-focused fieldset": {
        borderColor: otherColors,
      },
    },
  },
})(TextField);

export default function AuthForm() {
  const [user, setUser] = useContext(UserContext).user;
  const notificationCtx = useContext(NotificationContext);
  const [DarkMode, setDarkMode] = useContext(DarkModeContext).DarkMode;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  let authformTextfieldCSS = "authform-textfield";
  let authformSignInButtonCSS = "authform-signin-button";
  let authformSignUpButtonCSS = "authform-signup-button";
  if (DarkMode) {
    authformTextfieldCSS = "authform-textfield dark";
    authformSignInButtonCSS = "authform-signin-button dark";
    authformSignUpButtonCSS = "authform-signup-button dark";
    rootColor = "white";
    otherColors = "white";
  }

  const signUpHandler = async (event) => {
    event.preventDefault();

    notificationCtx.showNotification({
      title: "Please wait!",
      message: "Getting things ready...",
      status: "pending",
    });
    try {
      const gotUser = await signUpWithEmail(email, password);

      if (gotUser) {
        setUser(gotUser);
        localStorage.setItem("user", gotUser);

        notificationCtx.showNotification({
          title: "Success!",
          message: "Logged in successfully",
          status: "success",
        });

        history.push("/home");
      } else {
        notificationCtx.showNotification({
          title: "Error!",
          message: "Please enter valid details",
          status: "error",
        });
      }
    } catch (err) {
      notificationCtx.showNotification({
        title: "Error!",
        message: "Not able to Sign in!",
        status: "error",
      });
    }
  };

  const signInHandler = async (event) => {
    event.preventDefault();

    notificationCtx.showNotification({
      title: "Please wait!",
      message: "Getting things ready...",
      status: "pending",
    });

    try {
      const gotUser = await signInWithEmail(email, password);
      if (gotUser) {
        setUser(gotUser);
        localStorage.setItem("user", gotUser);

        notificationCtx.showNotification({
          title: "Success!",
          message: "Logged in successfully",
          status: "success",
        });

        history.push("/home");
      } else {
        notificationCtx.showNotification({
          title: "Error!",
          message: "Please enter valid details",
          status: "error",
        });
      }
    } catch (err) {
      notificationCtx.showNotification({
        title: "Error!",
        message: "Not able to Sign in!",
        status: "error",
      });
    }
  };

  return (
    <div>
      <Divider
        style={{
          marginBottom: "45px",
          backgroundColor: DarkMode && "white",
        }}
      />
      <div className="authform-textfields-wrapper">
        <div className="authform-textfields">
          <CssTextField
            inputProps={{ className: authformTextfieldCSS }}
            InputLabelProps={{ className: authformTextfieldCSS }}
            autoComplete="off"
            variant="outlined"
            label="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <CssTextField
            InputProps={{ className: authformTextfieldCSS }}
            InputLabelProps={{ className: authformTextfieldCSS }}
            variant="outlined"
            label="Password"
            type="password"
            value={password}
            style={{
              marginTop: "20px",
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <Divider
        style={{ marginTop: "25px", backgroundColor: DarkMode && "white" }}
      />

      <div style={{ float: "right", marginTop: "10px" }}>
        <Button
          className={authformSignInButtonCSS}
          autoFocus
          type="submit"
          onClick={signInHandler}
        >
          Login
        </Button>
        <Button
          className={authformSignUpButtonCSS}
          autoFocus
          type="submit"
          onClick={signUpHandler}
          color="primary"
        >
          SignUp
        </Button>
      </div>
    </div>
  );
}
