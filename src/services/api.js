import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:1880';

export async function getProducts() {
  const response = await axios.get('/products');
  console.log(response.data);
  return response.data;
}

export async function getProductById(id) {
  const response = await axios.get(`/product/${id}`);
  console.log(response.data);
  return response.data;
}

export async function getCategories() {
  const response = await axios.get(`/categories`);
  console.log(response.data);
  return response.data;
}
