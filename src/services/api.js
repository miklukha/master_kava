import axios from 'axios';

// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
// axios.defaults.baseURL = 'https://masterkava.herokuapp.com/';
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

// /products?sort=country&name=brasil,nicaragua
// /products?sort=price&min=260&max=500
// /products?sort=category&label=arabica50

//? NOT realize /products?sort=popular
// /products?sort=price_desc
// /products?sort=price_asc
