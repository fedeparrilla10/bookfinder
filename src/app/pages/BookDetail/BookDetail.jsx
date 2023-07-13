import { useParams } from 'react-router-dom';
import './BookDetail.css';

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  if (book)
    return (
      <div className="details-container">
        <img className="details__img" src={book.image} alt={book.title} />

        <div className="details__main-info">
          <h2 className="details__title">{book.title}</h2>
          <h3 className="details__author">{book.author}</h3>
          <h3 className="details__rating">{book.rating} ⭐</h3>
          <p>{book.long_description}</p>
          <p className="details__genre">{book.genre}</p>
        </div>
      </div>
    );
};

export default BookDetail;
