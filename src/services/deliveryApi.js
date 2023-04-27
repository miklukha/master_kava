import axios from 'axios';

axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json';

const apiKey = '292fa12fa5b38250c43a79e5de10f6ed';
const modelName = 'Address';
const headers = {
  'Content-Type': 'application/json',
};

export async function getCities(name) {
  const response = await axios.post(
    '/',
    {
      apiKey,
      modelName,
      calledMethod: 'getCities',
      methodProperties: {
        FindByString: name,
        Limit: '20',
        Page: '1',
      },
    },
    {
      headers,
    }
  );
  return response.data;
}

export async function getDepartments(city, query = '') {
  const response = await axios.post(
    '/',
    {
      apiKey,
      modelName,
      calledMethod: 'getWarehouses',
      methodProperties: {
        FindByString: query,
        CityName: city,
        Limit: '30',
        Page: '1',
      },
    },
    {
      headers,
    }
  );
  return response.data;
}
