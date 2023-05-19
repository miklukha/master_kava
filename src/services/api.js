import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:1880';

export async function getCurrentUser() {
  const token = localStorage.getItem('token' || '');

  const response = await axios.post(
    '/current',
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
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

export async function getUsers() {
  const response = await axios.get('/users');
  return response.data;
}

export async function updateContactsUser(data) {
  const token = localStorage.getItem('token' || '');

  const response = await axios.put('/users', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updatePasswordUser(data) {
  const token = localStorage.getItem('token' || '');

  const response = await axios.put('/users-password', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function createAdmin(data) {
  const response = await axios.post('/admin', data);
  return response.data;
}

export async function getCities(data) {
  const response = await axios.post('/cities', data);
  return response.data;
}

export async function getDepartments(data) {
  const response = await axios.post('/departments', data);
  return response.data;
}

export async function createOrder(data) {
  const response = await axios.post('/orders', data);
  return response.data;
}

export async function getOrders() {
  const response = await axios.get('/orders');
  return response.data;
}

export async function sendFeedback(data) {
  const response = await axios.post('/feedback', data);
  return response.data;
}
