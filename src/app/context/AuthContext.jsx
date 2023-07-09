import React, { createContext, useState } from 'react';
import userData from '../data/users.json';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState('');

  const login = (username, password) => {
    const user = userData.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setAuthenticated(true);
      setUser(username);
    } else {
      setAuthenticated(false);
    }
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
