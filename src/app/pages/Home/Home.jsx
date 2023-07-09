import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const Home = () => {
  const { authenticated, user } = useContext(AuthContext);

  return (
    <div>{authenticated ? <h3>Welcome, {user}</h3> : <div>Home</div>}</div>
  );
};

export default Home;
