import React from 'react';
import { Text } from 'react-native';
import { ThemeSwitcher } from '../../components/ThemeSwitcher/ThemeSwitcher.tsx';
import { useTheme } from '@react-navigation/native';
import { styles } from './ProfileScreen.styles.ts';
import { ProfileForm } from '../../components/ProfileForm/ProfileForm.tsx';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ProfileScreen = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>
        You can change your data & theme
      </Text>
      <ProfileForm />
      <ThemeSwitcher />
    </SafeAreaView>
  );
};
