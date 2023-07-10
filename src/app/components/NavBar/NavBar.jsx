import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './NavBar.css';
import bookShelf from '../../../assets/book-shelf.svg';

const NavBar = () => {
  const { authenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={bookShelf} alt="BookFinder Logo" className="logo__img" />
        <h2 className="logo__title">BookFinder</h2>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__menu__item">
          <Link to="" activeClassName="active">
            🏠 Home
          </Link>
        </li>
        <li className="navbar__menu__item">
          <Link to="booklist" activeClassName="active">
            📚 Books
          </Link>
        </li>
        <li className="navbar__menu__item">
          <Link to="favourites">⭐ My Favourites</Link>
        </li>

        {!authenticated ? (
          <li className="navbar__menu__item">
            <Link to="login">👤 Login</Link>
          </li>
        ) : (
          <li className="navbar__menu__item">
            <Link to="" onClick={logout}>
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
