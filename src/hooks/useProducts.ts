import { useEffect, useState } from 'react';
import { Product, productsApi } from '../api/product.ts';

type GroupedProducts = Record<string, Product[]>;

export const useProducts = () => {
  const [products, setProducts] = useState<GroupedProducts>({});
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
      const allComplicatedData = {
        'Perfect for you': [...extendedData],
        'Hot offers': [...extendedData].reverse(),
        'New Arrivals': [...extendedData],
      };

      setProducts(allComplicatedData);
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
    categories: Object.keys(products),
  };
};
