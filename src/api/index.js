import axios from 'axios';

const base = 'http://localhost:8888/'; // @TODO Move this to env-config

export const HTTP = axios.create({
  baseURL: base,
});
HTTP.interceptors.request.use((config) => {
  const user = localStorage.getItem('rpp_userdata');
  const retVal = config;
  if (user) {
    retVal.headers.Authorization = `Bearer${JSON.parse(user).token}`;
  }
  return retVal;
}, (error) => Promise.reject(error));

class Api {

  login (params) {
    return HTTP.post('/auth/local', params);
  }

  create (data) {
    return HTTP.post('/entries/', data).then(res => res.data);
  }

  searchEan(ean) {
    return HTTP.get(`/searchean/${ean}`).then(res => res.data);
  }

}

const api = new Api();

export default api;
