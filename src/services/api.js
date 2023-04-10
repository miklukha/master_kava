import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:1880';

export async function getProducts() {
  const response = await axios.get('/products');
  return response.data;
}

export async function getProductById(id) {
  const response = await axios.get(`/products/${id}`);
  return response.data;
}

export async function getCategories() {
  const response = await axios.get(`/categories`);
  return response.data;
}
