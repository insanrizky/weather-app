import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_API;
const key = process.env.APIXU_KEY;

const getHeaders = () => ({
  'Content-Type': 'application/json'
});

export const apiGet = async (path, params = {}) => await axios.get(path, {
  params: { ...params, key },
  headers: getHeaders()
});

// export const apiPost = async (path, data = {}) => await axios.post(path, data, { headers: getHeaders() });
// export const apiPut = async (path, data = {}, params = {}) => await axios.put(path, data, { params, headers: getHeaders() });
// export const apiDelete = async (path, params = {}) => await axios.delete(path, { params, headers: getHeaders() });
