import { useForm, Form } from 'react-hook-form';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Button from '../../components/Button/Button';
import { registerUser } from '../../services/registerUser';

function Register() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
    reset,
  } = useForm();

  const { getUsers } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
      getUsers();
      reset();
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      navigate('/login');
    }
  }, [isSubmitSuccessful]);

  return (
    <div className="register">
      <h2 className="register__title">Create an Account</h2>
      <p className="register__subtitle">
        Register an account to enhance your reading experience! By creating an
        account, you can easily add books to your personalized reading list.
        Stay organized, keep track of your favorite titles, and explore new
        literary adventures. Join our community of book enthusiasts and unlock a
        world of literary possibilities. Start building your reading journey
        today!
      </p>

      <Form
        className="register__form"
        control={control}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="input"
          type="text"
          placeholder="Username"
          {...register('username', { required: true, minLength: 6 })}
        />
        {errors.username?.type === 'required' && <p>Username is required.</p>}
        {errors.username?.type === 'minLength' && (
          <p>Username should have at least 6 characters.</p>
        )}
        <input
          className="input"
          type="password"
          placeholder="Password"
          {...register('password', {
            required: true,
            minLength: 8,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          })}
        />
        {errors.password?.type === 'required' && <p>Password is required.</p>}
        {errors.password?.type === 'minLength' && (
          <p>Password should have at least 8 characters.</p>
        )}
        {errors.password?.type === 'pattern' && (
          <p>
            Password should contain at least one lowercase letter, one uppercase
            letter, and one number.
          </p>
        )}
        {errors?.root?.server && <p>Form submit failed.</p>}
        <Button name="Register" />
      </Form>
    </div>
  );
}

export default Register;
