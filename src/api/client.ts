import axios from 'axios';
import { Platform } from 'react-native';

export const api = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'App-Os': Platform.OS,
  },
});

api.interceptors.response.use(
  response => response,
  error => {
    const message =
      error.response.message ||
      error.response.data.message ||
      'Something went wrong';
    return Promise.reject(new Error(message));
  },
);