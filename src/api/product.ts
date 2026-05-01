import { request } from './utils.ts';
import { api } from './client.ts';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  sizes: string[];
  options: string[];
};

export const productsApi = {
  getAll: () => request<Product[]>(api.get('/products')),
  getById: (id: number) => request<Product>(api.get(`/products/${id}`)),
};
