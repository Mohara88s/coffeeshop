import React from 'react';
import { View, Text } from 'react-native';
import { ThemeSwitcher } from '../../components/ThemeSwitcher/ThemeSwitcher';
import { useTheme } from '@react-navigation/native';
import { styles } from './ProfileScreen.styles.ts';

export const ProfileScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>ProfileScreen</Text>
      <ThemeSwitcher />
    </View>
  );
};
