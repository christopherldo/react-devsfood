import qs from 'qs';

const BASE_API = 'https://api.b7web.com.br/devsfood/api';

const fetchGet = async (endpoint = '', headers = {}, body) => {
  let url = BASE_API + endpoint;
  if (body) url += `/?${qs.stringify(body)}`;

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

export default {
  getCategories: async () => fetchGet('/categories'),
  getProducts: async (category = '', page = 1, search = '') => {
    const body = {};

    if (category) body.category = category;
    if (page) body.page = page;
    if (search) body.search = search;

    return fetchGet('/products', {}, body);
  },
};
