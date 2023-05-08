import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:1880';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function register(data) {
  const response = await axios.post('/register', data);
  token.set(response.data.token);
  return response.data;
}

export async function login(data) {
  const response = await axios.post('/login', data);
  token.set(response.data.token);
  return response.data;
}

export async function logout() {
  const response = await axios.post('/logout');
  token.unset();
  return response.data;
}
