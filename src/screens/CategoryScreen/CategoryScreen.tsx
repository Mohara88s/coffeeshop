import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/core';
import { HomeStackParamList } from '../../navigation/types.ts';
import { CategoryProductCardsList } from '../../components/CategoryProductCardsList/CategoryProductCardsList.tsx';
import { useProducts } from '../../hooks/useProducts.ts';

export const CategoryScreen = () => {
  const route = useRoute<RouteProp<HomeStackParamList, 'CategoryScreen'>>();
  const { products } = useProducts();
  const { category } = route.params;
  return (
    <>
      <CategoryProductCardsList list={products[category]} />
    </>
  );
};
