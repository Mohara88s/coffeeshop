import React from 'react';
import { Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/core';
import { RootStackParamList } from '../../navigation/types.ts';
import { ProductCardDetailed } from '../../components/ProductCardDetailed/';
import { PRODUCTS_DATA } from '../../store/products.ts';
import { BackButton } from '../../components/BackButton/BackButton.tsx';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ProductDetailsScreen.styles.ts';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  const route =
    useRoute<RouteProp<RootStackParamList, 'ProductDetailsScreen'>>();

  const { productId } = route.params;
  const product = PRODUCTS_DATA.find(
    item => String(item.id) === String(productId),
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.backButtonWrapper}>
        <BackButton onPress={() => navigation.goBack()} iconName="x" />
      </View>
      {product ? (
        <ProductCardDetailed {...product} />
      ) : (
        <View style={styles.notFoundMessage}>
          <Text>This product was not found.</Text>
        </View>
      )}
    </ SafeAreaView>
  );
};
