import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/user";
import { signInWithGoogle } from "../../services/auth";
import "./style.css";

export default function SignInBtn() {
  const [, setUser] = useContext(UserContext).user;
  const history = useHistory();

  const signInBtnClick = async () => {
    let userBySignIn = await signInWithGoogle();
    if (userBySignIn) {
      localStorage.setItem("user", userBySignIn);
      setUser(userBySignIn);
      history.push("/home");
    }
  };
  return <div onClick={signInBtnClick} className="signInBtn"></div>;
}
