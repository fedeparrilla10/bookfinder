export async function registerUser(userData) {
  try {
    const response = await fetch(
      'https://64a916088b9afaf4844a3ab6.mockapi.io/users',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to register user.');
  }
}
