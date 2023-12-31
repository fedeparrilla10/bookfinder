import './BookList.css';
import Book from '../../components/Book/Book';

const BookList = ({ books, favBook, setFavBook, removeFav }) => {
  const addToFav = (book) => {
    favBook.indexOf(book) === -1 && setFavBook([...favBook, book]);
  };

  const allBooks = books.map((book) => {
    return (
      <Book
        book={book}
        favBook={favBook}
        addToFav={addToFav}
        removeFav={removeFav}
        key={book.id}
      />
    );
  });

  return <div className="booklist-container">{allBooks}</div>;
};

export default BookList;
