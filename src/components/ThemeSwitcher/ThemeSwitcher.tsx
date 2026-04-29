import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { useTheme } from '../../context/themeContext/useTheme';
import { Theme } from '../../context/themeContext/types';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Pressable
      onPress={toggleTheme}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: theme === Theme.DARK ? '#333' : '#FFF',
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      <Icon
        name={theme === Theme.DARK ? 'sun' : 'moon'}
        size={24}
        color={theme === Theme.DARK ? '#ffbb00' : '#006ffd'}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
