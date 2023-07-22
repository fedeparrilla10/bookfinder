import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './app/core/NavBar/NavBar';
import Home from './app/pages/Home/Home';
import BookList from './app/pages/BookList/BookList';
import FavList from './app/pages/FavList/FavList';
import Login from './app/pages/Login/Login';
import Footer from './app/core/Footer/Footer';
import axios from 'axios';
import './App.css';
import About from './app/pages/About/About';
import BookDetail from './app/pages/BookDetail/BookDetail';
import Register from './app/pages/Register/Register';

function App() {
  const [books, setBooks] = useState([]);
  const [favBook, setFavBook] = useState([]);

  const removeFav = (bookId) => {
    const updatedFavBooks = favBook.filter((book) => book.id !== bookId);
    setFavBook(updatedFavBooks);
  };

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
      <NavBar />
      <div className="container__content-box">
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route
            path="/booklist"
            element={
              <BookList
                books={books}
                favBook={favBook}
                setFavBook={setFavBook}
                removeFav={removeFav}
              />
            }
          ></Route>
          <Route
            path="/book/:id"
            element={<BookDetail books={books} />}
          ></Route>
          <Route
            path="/favourites"
            element={
              <FavList
                favBook={favBook}
                setFavBook={setFavBook}
                removeFav={removeFav}
              />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
