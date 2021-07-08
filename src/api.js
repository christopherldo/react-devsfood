import qs from 'qs';

const BASE_API = 'https://api.b7web.com.br/devsfood/api';

const fetchGet = async (endpoint = '', headers = {}, body = '') => {
  let url = BASE_API + endpoint;
  if (body) url += qs.stringify(body);

  const res = await fetch(url, {
    method: 'GET',
    headers,
  });

  const json = await res.json();

  return json;
};

const fetchPost = async (endpoint = '', headers = {}, body = '') => {
  const url = BASE_API + endpoint;

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body,
  });

  const json = await res.json();
  return json;
};

export default {
  async getCategories() {
    const categories = await fetchGet('/categories');
    return categories;
  },
};
