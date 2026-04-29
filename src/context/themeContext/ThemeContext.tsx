import { createContext, ReactNode, useState } from 'react';
import { Theme, ThemeContextValue } from './types.ts';
import { StatusBar } from 'react-native';

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () =>
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StatusBar
        animated={true}
        key={theme}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme === 'dark' ? '#000' : '#fff'}
      />
      {children}
    </ThemeContext.Provider>
  );
};
