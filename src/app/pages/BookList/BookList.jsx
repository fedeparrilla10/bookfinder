import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const BookList = ({ books, favBook, setFavBook }) => {
  const { authenticated } = useContext(AuthContext);

  const addToFav = (book) => {
    favBook.indexOf(book) === -1 && setFavBook([...favBook, book]);
  };

  const allBooks = books.map((book) => {
    return (
      <div key={book.id}>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        <p>{book.author}</p>
        {authenticated && (
          <button onClick={() => addToFav(book)}>Add to Favourites</button>
        )}
      </div>
    );
  });

  return <div>{allBooks}</div>;
};

export default BookList;
