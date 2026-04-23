import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './HomeScreen.styles';
import { PRODUCTS_DATA, PRODUCTS_DATA_REV } from '../../store/products.ts';
import { ProductCardsList } from '../../components/ProductCardsList/ProductCardsList.tsx';
import Hero from '../../components/Hero/Hero.tsx';

export const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Hero />
      <ProductCardsList title="Perfect for you" list={PRODUCTS_DATA} />
      <ProductCardsList title="Hot offers" list={PRODUCTS_DATA_REV} />
      <ProductCardsList title="New Arrivals" list={PRODUCTS_DATA} />
    </ScrollView>
  );
};
