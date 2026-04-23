import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/core';
import { HomeStackParamList } from '../../navigation/types.ts';

export const CategoryScreen = () => {
  const route = useRoute<RouteProp<HomeStackParamList, 'CategoryScreen'>>();

  const { category } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CategoryScreen: {category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
