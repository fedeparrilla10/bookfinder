import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userData from '../data/users.json';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = (username, password) => {
    const user = userData.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setAuthenticated(true);
      setUser(username);
      navigate('/');
    } else {
      setAuthenticated(false);
      setError('Wrong username or password');
    }
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};
