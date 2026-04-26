import React from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { styles } from './HomeScreen.styles';
import { ProductCardsList } from '../../components/ProductCardsList/ProductCardsList.tsx';
import Hero from '../../components/Hero/Hero.tsx';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useProducts } from '../../hooks/useProducts.ts';

export const HomeScreen = () => {
  const { products, loading, error } = useProducts();
  const renderContent = () => {
  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return (
      <View style={styles.error}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }
  return (
      <>
        <ProductCardsList title="Perfect for you" list={products} />
        <ProductCardsList title="Hot offers" list={[...products].reverse()} />
        <ProductCardsList title="New Arrivals" list={products} />
      </>
    );
};

  return (
    <SafeAreaView edges={['top']} style={styles.SafeAreaView}>
      <ScrollView contentContainerStyle={styles.container}>
        <Hero />
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
};
