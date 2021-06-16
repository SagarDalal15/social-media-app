import { createContext, useState } from "react";

export const DarkModeContext = createContext();
export const DarkModeContextProvider = (props) => {
  //By using this context this user state value can be accessed from anywhere.
  const [DarkMode, setDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={{ DarkMode: [DarkMode, setDarkMode] }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};
//to use this user state value in other components,just wrap under <UserContext.Provider> this </UserContext.Provider>
