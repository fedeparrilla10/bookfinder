import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Book.css';

const Book = ({ book, addToFav }) => {
  const { authenticated } = useContext(AuthContext);

  return (
    <div className="book">
      <h3 className="book__title">{book.title}</h3>
      <img src={book.image} alt={book.title} className="book__img" />
      {/* <p className="book__genre">{book.genre}</p> */}
      <p className="book__description">{book.description}</p>
      {authenticated && (
        <button onClick={() => addToFav(book)} className="book__button">
          Add to Favourites
        </button>
      )}
    </div>
  );
};

export default Book;
