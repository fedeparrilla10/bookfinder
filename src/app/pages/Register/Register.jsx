import { useForm, Form } from 'react-hook-form';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = useForm();

  const { getUsers } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await fetch('https://64a916088b9afaf4844a3ab6.mockapi.io/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      getUsers();
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
    <div>
      <Form control={control} onSubmit={handleSubmit(onSubmit)}>
        <input {...register('username', { required: true, minLength: 6 })} />
        <input
          type="password"
          {...register('password', {
            required: true,
            minLength: 8,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          })}
        />
        {errors?.root?.server && <p>Form submit failed.</p>}
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

export default Register;
