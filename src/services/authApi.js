import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:1880';

export async function register(data) {
  const response = await axios.post('/register', data);
  return response.data;
}

export async function login(data) {
  const response = await axios.post('/login', data);
  return response.data;
}

export async function logout() {
  const token = localStorage.getItem('token' || '');
  const response = await axios.post(
    '/logout',
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}