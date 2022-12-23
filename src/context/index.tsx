import React, { createContext, useState } from "react";

interface Props {
  children: JSX.Element;
}


const AppContext = createContext({});

const AppProvider = ({ children }: Props) => {
 
  const [singin, setSingin] = useState(null)

  return (
    <AppContext.Provider value={{singin, setSingin}}>
      {children}
    </AppContext.Provider>
  )

}

export { AppProvider, AppContext }