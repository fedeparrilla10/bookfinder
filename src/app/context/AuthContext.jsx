import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const getUsers = async () => {
    const res = await axios.get(
      'https://64a916088b9afaf4844a3ab6.mockapi.io/users'
    );
    setData(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const login = (username, password) => {
    const user = data.find(
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
