import React, { useContext } from "react";

import { UserContext } from "./contexts/user";

export default (ChildComponent) => {
  const ComposedComponent = (props) => {
    const [user, setUser] = useContext(UserContext).user;
    if (user) {
      return (
        <div>
          <ChildComponent {...props} />
        </div>
      );
    } else {
      return null;
    }
  };

  return ComposedComponent;
};
