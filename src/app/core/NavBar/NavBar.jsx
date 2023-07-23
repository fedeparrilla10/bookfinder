import { NavLink, Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import bookShelf from '../../../assets/book-shelf.svg';
import './NavBar.css';

const NavBar = () => {
  const { authenticated, logout, user } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar__logo">
          <img src={bookShelf} alt="BookFinder Logo" className="logo__img" />
          <h2 className="logo__title">BookFinder</h2>
        </div>
      </NavLink>
      <ul className="navbar__menu">
        <li>
          <NavLink className="navbar__menu__item" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar__menu__item" to="booklist">
            Books
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar__menu__item" to="favourites">
            My Favourites
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar__menu__item" to="about">
            About
          </NavLink>
        </li>

        {!authenticated ? (
          <>
            <li>
              <NavLink className="navbar__menu__item" to="register">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar__menu__item" to="login">
                Login
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="navbar__menu__item" to="" onClick={logout}>
                Logout
              </Link>
            </li>
            <li className="navbar__menu__welcome">Welcome, {user}</li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
