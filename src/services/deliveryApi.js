import axios from 'axios';

axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json';

const apiKey = '292fa12fa5b38250c43a79e5de10f6ed';
const modelName = 'Address';
const headers = {
  'Content-Type': 'application/json',
};

export async function getCities() {
  const response = await axios.post(
    '/',
    {
      apiKey,
      modelName,
      calledMethod: 'getCities',
      methodProperties: {},
    },
    {
      headers,
    }
  );
  return response.data;
}

export async function getAddress({ city }) {
  const response = await axios.post(
    '/',
    {
      apiKey,
      modelName,
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityName: city,
      },
    },
    {
      headers,
    }
  );
  return response.data;
}
