import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { LoginPage } from "./pages/LoginPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import { UserContextProvider } from "./contexts/user";
import { DarkModeContextProvider } from "./contexts/darkmode";
import { NotificationContextProvider } from "./contexts/notification-context";
import Layout from "./components/layout/Layout";
import GithubLink from "./components/github-link";

ReactDOM.render(
  <NotificationContextProvider>
    <DarkModeContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route
                exact
                path={process.env.PUBLIC_URL + "/"}
                component={LoginPage}
              ></Route>
              <Route exact path="/home" component={App}></Route>
            </Switch>
            <GithubLink />
          </Layout>
        </BrowserRouter>
      </UserContextProvider>
    </DarkModeContextProvider>
  </NotificationContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
