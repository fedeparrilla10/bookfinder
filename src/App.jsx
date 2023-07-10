import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './app/components/NavBar/NavBar';
import Home from './app/pages/Home/Home';
import BookList from './app/pages/BookList/BookList';
import FavList from './app/pages/FavList/FavList';
import Login from './app/pages/Login/Login';
import Footer from './app/components/Footer/Footer';
import { AuthProvider } from './app/context/AuthContext';
import axios from 'axios';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [favBook, setFavBook] = useState([]);

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
    <div className="container">
      <AuthProvider>
        <NavBar />
        <div className="container__content-box">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/booklist"
              element={
                <BookList
                  books={books}
                  favBook={favBook}
                  setFavBook={setFavBook}
                />
              }
            ></Route>
            <Route
              path="/favourites"
              element={<FavList favBook={favBook} />}
            ></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
