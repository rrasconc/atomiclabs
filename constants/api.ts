import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://atomic-test-api.onrender.com',
});
