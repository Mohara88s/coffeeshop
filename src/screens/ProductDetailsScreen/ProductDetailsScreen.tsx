import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/core';
import { RootStackParamList } from '../../navigation/types.ts';
import { ProductCardDetailed } from '../../components/ProductCardDetailed/';
import { BackButton } from '../../components/BackButton/BackButton.tsx';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ProductDetailsScreen.styles.ts';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useProduct } from '../../hooks/useProduct.ts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const route =
    useRoute<RouteProp<RootStackParamList, 'ProductDetailsScreen'>>();

  const { productId } = route.params;
  const { product, loading, error } = useProduct(productId);

  const renderContent = () => {
if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error || !product) {
    return (
      <View style={styles.error}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
        <>
          <ProductCardDetailed {...product} />
        </>
      );
};

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={[styles.backButtonWrapper, { paddingTop: insets.top }]}>
        <BackButton onPress={() => navigation.goBack()} iconName="x" />
      </View>
      {renderContent()}
    </ View>
  );
};
