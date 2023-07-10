import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './NavBar.css';
import bookShelf from '../../../assets/book-shelf.svg';

const NavBar = () => {
  const { authenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="">
        <div className="navbar__logo">
          <img src={bookShelf} alt="BookFinder Logo" className="logo__img" />
          <h2 className="logo__title">BookFinder</h2>
        </div>
      </Link>
      <ul className="navbar__menu">
        <li>
          <Link to="" className="navbar__menu__item">
            Home
          </Link>
        </li>
        <li>
          <Link to="booklist" className="navbar__menu__item">
            Books
          </Link>
        </li>
        <li>
          <Link to="favourites" className="navbar__menu__item">
            My Favourites
          </Link>
        </li>

        {!authenticated ? (
          <li>
            <Link to="login" className="navbar__menu__item">
              Login
            </Link>
          </li>
        ) : (
          <li>
            <Link to="" onClick={logout} className="navbar__menu__item">
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
