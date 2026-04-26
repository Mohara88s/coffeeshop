import { useEffect, useState } from 'react';
import { Product, productsApi } from '../api/product.ts';

export const useProduct = (id: number) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = async (productId: number) => {
    try {
      setLoading(true);
      setError(null);

      const data = await productsApi.getById(productId);
      const extendedData = {
        ...data,
        sizes: ['small', 'medium', 'large'],
        options: ['packaging', 'extended warranty'],
      };
      setProduct(extendedData);
    } catch (e: any) {
      setError(e.message || 'Failed to load product');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  return {
    product,
    loading,
    error,
    refetch: fetchProduct,
  };
};
