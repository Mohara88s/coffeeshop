import { useEffect, useState } from 'react';
import { Product, productsApi } from '../api/product.ts';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await productsApi.getAll();
      const extendedData = data.map(item => ({
        ...item,
        sizes: ['small', 'medium', 'large'],
        options: ['packaging', 'extended warranty'],
      }));
      setProducts(extendedData);
    } catch (e: any) {
      setError(e.message || 'Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
  };
};
