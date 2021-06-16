import { createContext, useState } from "react";

export const UserContext = createContext();
export const UserContextProvider = (props) => {
  //By using this context this user state value can be accessed from anywhere.
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user: [user, setUser] }}>
      {props.children}
    </UserContext.Provider>
  );
};
//to use this user state value in other components,just wrap under <UserContext.Provider> this </UserContext.Provider>
