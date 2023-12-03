"use client";

import { createContext, useState } from "react";

export const userContext = createContext<any>(null);

const ContextWrapper = ({ children }: any) => {
  const [nameOfUser, setNameOfUser] = useState<any>("");
  const [usernameOfUser, setUsernameOfUser] = useState<any>("");

  return (
    <>
      <userContext.Provider
        value={{ nameOfUser, setNameOfUser, usernameOfUser, setUsernameOfUser }}
      >
        {children}
      </userContext.Provider>
    </>
  );
};

export default ContextWrapper;
