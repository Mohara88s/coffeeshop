import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { useTheme } from '../../context/themeContext/useTheme';
import { Theme } from '../../context/themeContext/types';
import { styles } from './ThemeSwitcherstyles';

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
