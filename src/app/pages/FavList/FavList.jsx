import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Book from '../../components/Book/Book';

const FavList = ({ favBook, removeFav }) => {
  const { authenticated } = useContext(AuthContext);

  const favBooks = favBook.map((book) => {
    return (
      <Book book={book} favBook={favBook} key={book.id} removeFav={removeFav} />
    );
  });

  return authenticated ? (
    favBook.length === 0 ? (
      <h3>You don't have any favourite books yet.</h3>
    ) : (
      <div>{favBooks}</div>
    )
  ) : (
    <>
      <p>You have to be logged in to see this content</p>
      <Link to="/login">
        <Button name={'Log In'} />
      </Link>
    </>
  );
};

export default FavList;
