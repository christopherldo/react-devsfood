import qs from 'qs';

const BASE_API = 'https://api.b7web.com.br/devsfood/api';

const fetchGet = async (endpoint = '', headers = {}, body) => {
  let url = BASE_API + endpoint;
  if (body) url += qs.stringify(body);

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      ...headers,
      Accept: 'application/json',
    },
  });

  const json = await res.json();
  return json;
};

const fetchPost = async (endpoint = '', headers = {}, body = {}) => {
  const url = BASE_API + endpoint;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body,
  });

  const json = await res.json();
  return json;
};

export default {
  getCategories: async () => fetchGet('/categories'),
  getProducts: async () => fetchGet('/products'),
};
