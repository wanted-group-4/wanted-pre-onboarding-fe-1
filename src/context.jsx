import React, { useState, useEffect, createContext } from 'react';

const defaultContext = {
  handleLogIn: () => {},
  handleLogOut: () => {},
  isLoggedIn: false,
};

export const AuthContext = createContext(defaultContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = (email, password) => {
    localStorage.setItem('user', JSON.stringify({ email, password }));
    window.location.reload();
  };

  const handleLogOut = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ handleLogIn, handleLogOut, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
