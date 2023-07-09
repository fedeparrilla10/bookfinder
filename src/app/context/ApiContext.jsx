import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const APIContext = createContext();

export const APIContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const getBooks = await axios.get(
        'https://64a916088b9afaf4844a3ab6.mockapi.io/books'
      );
      setBooks(getBooks.data);
    };
    getData();
  }, []);

  return (
    <APIContext.Provider value={{ books }}>{children}</APIContext.Provider>
  );
};
