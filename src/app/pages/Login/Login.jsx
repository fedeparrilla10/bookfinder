import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Button from '../../components/Button/Button';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="login">
      <h2 className="login__title">Sign In to Your Account</h2>

      <form className="login__form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="User"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button name="Login" />
      </form>

      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
