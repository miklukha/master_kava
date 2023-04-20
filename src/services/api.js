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

export async function deleteProduct(id) {
  const response = await axios.put(`/delete/${id}`);
  return response.data;
}

// export async function uploadImage(data) {
//   const response = await axios.post('/upload-image', { data });
//   return response.data;
// }

export async function updateProduct(id, data) {
  const response = await axios.put(
    `/update/${id}`,
    { data },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return response.data;
}

export async function upload(formData, file) {
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
  const response = await axios.post(`/create`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
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
