import { useForm, Form } from 'react-hook-form';

function Register() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await fetch('https://64a916088b9afaf4844a3ab6.mockapi.io/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <div>
      <Form control={control} onSubmit={handleSubmit(onSubmit)}>
        <input {...register('username')} />
        <input type="password" {...register('password')} />
        {isSubmitSuccessful && <p>Form submit successful.</p>}
        {errors?.root?.server && <p>Form submit failed.</p>}
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

export default Register;
