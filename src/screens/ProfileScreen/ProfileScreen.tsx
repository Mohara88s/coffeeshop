import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeSwitcher } from '../../components/ThemeSwitcher/ThemeSwitcher';

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProfileScreen</Text>
      <ThemeSwitcher />
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
