import React, { useState, useContext } from "react";
import {
  DialogContent,
  Button,
  TextField,
  withStyles,
  makeStyles,
  DialogActions,
  createMuiTheme,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { green } from "@material-ui/core/colors";

import NotificationContext from "../../contexts/notification-context";
import { signInWithEmail, signUpWithEmail } from "../../services/auth";
import { UserContext } from "../../contexts/user";
import { DarkModeContext } from "../../contexts/darkmode";
import "./style.css";

let CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#4051B5",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#4051B5",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#C3C4C4",
      },
      "&:hover fieldset": {
        borderColor: "#4051B5",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#4051B5",
      },
    },
  },
})(TextField);

let DarkCssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
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
      <DialogContent dividers>
        {DarkMode ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "400px",
              minWidth: "300px",
            }}
          >
            <DarkCssTextField
              id="email-textfield"
              inputProps={{ className: authformTextfieldCSS }}
              InputLabelProps={{ className: authformTextfieldCSS }}
              name="email"
              variant="outlined"
              autoComplete="off"
              label="Email"
              type="text"
              style={{
                marginTop: "20px",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <DarkCssTextField
              id="password-textfield"
              InputProps={{ className: authformTextfieldCSS }}
              InputLabelProps={{ className: authformTextfieldCSS }}
              name="password"
              variant="outlined"
              label="Password"
              type="password"
              value={password}
              style={{
                marginTop: "20px",
                marginBottom: "10px",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "400px",
              minWidth: "300px",
            }}
          >
            <CssTextField
              id="email-textfield"
              inputProps={{ className: authformTextfieldCSS }}
              InputLabelProps={{ className: authformTextfieldCSS }}
              autoComplete="off"
              name="email"
              variant="outlined"
              label="Email"
              type="text"
              style={{
                marginTop: "20px",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CssTextField
              id="password-textfield"
              InputProps={{ className: authformTextfieldCSS }}
              InputLabelProps={{ className: authformTextfieldCSS }}
              name="password"
              variant="outlined"
              label="Password"
              type="password"
              value={password}
              style={{
                marginTop: "20px",
                marginBottom: "10px",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        )}
      </DialogContent>
      <DialogActions>
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
      </DialogActions>
    </div>
  );
}
