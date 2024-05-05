import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { createContext, useState } from 'react';
import axios from 'axios';

type Props = {
  children: React.ReactNode;
};

export type ContextType = {
  userIsLoggedIn: boolean;
  isAuthLoading: boolean;
  setUserIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export const checkAuthContext = createContext<ContextType>({
  userIsLoggedIn: false,
  isAuthLoading: true,
  setUserIsLoggedIn: () => {},
});

function CheckAuthProvider({ children }: Props) {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [isAuthLoading, setisAuthLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER_URL}:${
          import.meta.env.VITE_SERVER_PORT
        }/checkAuth`,
        { withCredentials: true }
      )
      .then(res => {
        console.log(res.data);
        setUserIsLoggedIn(res.data.isLoggedIn);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setisAuthLoading(false);
      });
  }, []);

  // isLoading reinbauen isAuthLoading --> und dann in den Layouts erst navigieren, wenn !isAuthLoading

  return (
    <>
      <checkAuthContext.Provider
        value={{ userIsLoggedIn, isAuthLoading, setUserIsLoggedIn }}
      >
        {children}
      </checkAuthContext.Provider>
    </>
  );
}

export default CheckAuthProvider;
