import { createContext, useState } from "react";

export const UserContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: undefined as ((isLoggedIn: boolean) => void) | undefined,
});

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const UserProvider = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("user")) ?? false
  );

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
