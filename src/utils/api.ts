import axios from "axios";

export const baseURL = 'https://api.github.com';
export const gistBaseUrl = 'https://gist.github.com';

const api = axios.create({
  baseURL,
  headers: { Accept: 'application/vnd.github.v3+json' }
});

export default api;
