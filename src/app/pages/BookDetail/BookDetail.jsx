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
          <div className="details-text-container">
            <p className="details__description">{book.long_description}</p>
            <p className="details__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              expedita quos. Ex natus mollitia earum, enim debitis reprehenderit
              dicta fugit asperiores aliquam tempore exercitationem, in, nostrum
              blanditiis unde temporibus. Aperiam ut aliquam debitis ipsa
              possimus fuga eos eum quis voluptas.
            </p>
          </div>
          <p className="details__genre">{book.genre}</p>
        </div>
      </div>
    );
};

export default BookDetail;
