import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const FavList = ({ favBook }) => {
  const { authenticated } = useContext(AuthContext);

  const favBooks = favBook.map((book) => {
    return (
      <div key={book.id}>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        <p>{book.author}</p>
      </div>
    );
  });

  return authenticated ? (
    favBook.length === 0 ? (
      <h3>You don't have any favourite books yet.</h3>
    ) : (
      <div>{favBooks}</div>
    )
  ) : (
    <p>You have to be logged in to see this content</p>
  );
};

export default FavList;
