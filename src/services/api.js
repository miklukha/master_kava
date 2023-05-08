import axios from 'axios';

// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
//  headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//       },
//       withCredentials: true,
//       credentials: 'same-origin
// axios.defaults.baseURL = 'https://masterkava.herokuapp.com/';
axios.defaults.baseURL = 'http://127.0.0.1:1880';
// axios.defaults.withCredentials = true;
// axios.defaults.credentials = 'same-origin';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// {
//     headers: {
//       Authorization: token,
//     },
//   }

const removeAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const token = localStorage.getItem('token' || '');

if (token) {
  setAuthHeader(token);
} else {
  removeAuthHeader();
}

export async function register(data) {
  const response = await axios.post('/register', data);
  return response.data;
}

export async function login(data) {
  const response = await axios.post('/login', data);
  return response.data;
}

export async function logout() {
  const response = await axios.post('/logout');
  return response.data;
}

export async function getCurrentUser() {
  const response = await axios.get('/current');
  return response.data;
}

export async function getProducts() {
  const response = await axios.get('/products');
  return response.data;
}

export async function getProductsPopular() {
  const response = await axios.get('/products?sort=popular');
  return response.data;
}

export async function getProductsDesc() {
  const response = await axios.get('/products?sort=price_desc');
  return response.data;
}

export async function getProductsAsc() {
  const response = await axios.get('/products?sort=price_asc');
  return response.data;
}

// /products?sort=country&name=brasil,nicaragua
export async function getProductsByCountry(countries) {
  const response = await axios.get(`/products?sort=country&name=${countries}`);
  return response.data;
}

export async function getProductsByPrice(min, max) {
  const response = await axios.get(
    `/products?sort=price&&min=${min}&max=${max}`
  );
  return response.data;
}

export async function getProductsByCategory(category) {
  const response = await axios.get(`/products?sort=category&label=${category}`);
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

export async function deleteProduct(id) {
  const response = await axios.put(`/delete/${id}`);
  return response.data;
}

export async function updateProduct(id, data) {
  const response = await axios.put(`/products/${id}`, data);
  return response.data;
}

export async function uploadImage(formData, file) {
  const response = await axios.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'file-name': file.name,
      'file-size': file.size,
    },
  });
  return response.data;
}

export async function createProduct(data) {
  const response = await axios.post('/products', data);
  return response.data;
}

export async function getImage(id) {
  const response = await axios.get(`/images/${id}`);
  return response.data;
}

export async function getUser() {
  const response = await axios.get(`/user`);
  return response.data;
}

/*
 * try {
    const response = await axios.post('/prod', { data });
    return response.data;
  } catch (error) {
    // handle the error
  }
 */

// /products?sort=country&name=brasil,nicaragua
// /products?sort=price&min=260&max=500
// /products?sort=category&label=arabica50

//? NOT realize /products?sort=popular
// /products?sort=price_desc
// /products?sort=price_asc
