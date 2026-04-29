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
    let message = 'Something went wrong';

    if (error.response) {
      // Сервер відповів кодом 4xx або 5xx
      message = error.response.data?.message || error.message;
    } else if (error.request) {
      // Запит був відправлений, але відповіді немає (проблеми з мережею)
      message = 'No response from server. Check your internet connection.';
    } else {
      // Сталося щось інше при налаштуванні запиту
      message = error.message;
    }

    return Promise.reject(new Error(message));
  },
);
