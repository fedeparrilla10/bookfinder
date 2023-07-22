import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Book from '../../components/Book/Book';
import './FavList.css';

const FavList = ({ favBook, removeFav }) => {
  const { authenticated } = useContext(AuthContext);

  const favBooks = favBook.map((book) => {
    return (
      <Book book={book} favBook={favBook} key={book.id} removeFav={removeFav} />
    );
  });

  return authenticated ? (
    <div className="favlist-container">
      {favBook.length > 0 ? (
        { favBooks }
      ) : (
        <h3>You don't have any favourite books yet.</h3>
      )}
    </div>
  ) : (
    <div className="favlist-offline-container">
      <p>You have to be logged in to see this content</p>
      <Link to="/login">
        <Button name={'Log In'} />
      </Link>
    </div>
  );
};

export default FavList;
