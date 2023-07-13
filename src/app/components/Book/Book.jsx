import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Book.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Book = ({ book, favBook, addToFav, removeFav }) => {
  const { authenticated } = useContext(AuthContext);

  return (
    <Link to={`/book/${book.id}`}>
      <div className="book">
        <div className="book__img-container">
          <img className="book__img" src={book.image} alt={book.title} />
        </div>
        <div className="book__main-info">
          <h3 className="book__title">{book.title}</h3>
          <p className="book__description">{book.description}</p>
          <div className="book__main-details">
            <p className="book__author">✒️ {book.author}</p>
            <p className="book__genre">📘 {book.genre}</p>
            <p className="book__rating">🌟 {book.rating}</p>
          </div>
        </div>
        {authenticated &&
          (favBook && favBook.indexOf(book) === -1 ? (
            <Button
              name="Add to Favourites"
              handleClick={addToFav}
              params={book}
            />
          ) : (
            <Button
              name="Remove from Favourites"
              handleClick={removeFav}
              params={book.id}
            />
          ))}
      </div>
    </Link>
  );
};

export default Book;
