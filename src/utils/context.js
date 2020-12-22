import React, { useState } from "react";

// Se define el Context con un valor inicial
export const SessionContext = React.createContext({
  userName: "User",
  setUserName: (name) => {},
});

// Se crea un componente SessionProvider que maneja los datos del Context y
// envuelve con el Provider a todos sus hijos
const SessionProvider = ({ children }) => {
  const [userName, setUserName] = useState("User");
  return (
    <SessionContext.Provider
      // datos y funciones que tiene el Context
      value={{
        userName,
        setUserName: (name) => setUserName(name),
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
