import React, { useContext, useEffect } from "react";
import { Home } from "./pages";

import { UserContext } from "./contexts/user";

const App = () => {
  const [user, setUser] = useContext(UserContext).user;

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
    }
  }, []);

  return (
    <div className="app">
      <Home />
    </div>
  );
};

export default App;
