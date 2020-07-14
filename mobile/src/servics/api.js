import axios from 'axios';

const api = axios.create({
  baseURL: 'http://186.251.64.185'
});

export default api;