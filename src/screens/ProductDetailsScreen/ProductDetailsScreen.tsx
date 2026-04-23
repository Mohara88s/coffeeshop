import React from 'react';
import { Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/core';
import { HomeStackParamList } from '../../navigation/types.ts';
import { ProductCardDetailed } from '../../components/ProductCardDetailed/';
import { PRODUCTS_DATA } from '../../store/products.ts';
import { BackButton } from '../../components/BackButton/BackButton.tsx';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ProductDetailsScreen.styles.ts';

export const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  const route =
    useRoute<RouteProp<HomeStackParamList, 'ProductDetailsScreen'>>();

  const { productId } = route.params;
  const product = PRODUCTS_DATA.find(
    item => String(item.id) === String(productId),
  );

  return (
    <View style={styles.container}>
      <View style={styles.backButtonWrapper}>
        <BackButton onPress={() => navigation.goBack()} iconName="x" />
      </View>
      {product ? (
        <ProductCardDetailed {...product} />
      ) : (
        <Text>Продукт не знайдено</Text>
      )}
    </View>
  );
};
