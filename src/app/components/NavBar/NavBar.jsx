import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const NavBar = () => {
  const { authenticated, logout } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="booklist">Libros</Link>
        </li>
        <li>
          <Link to="favourites">Mis Favoritos</Link>
        </li>

        {!authenticated ? (
          <li>
            <Link to="login">Login</Link>
          </li>
        ) : (
          <li>
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
