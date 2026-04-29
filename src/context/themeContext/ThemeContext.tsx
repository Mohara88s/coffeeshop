import { createContext, ReactNode, useState } from 'react';
import { Theme, ThemeContextValue } from './types.ts';
import { StatusBar } from 'react-native';

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const toggleTheme = () =>
    setTheme(currentTheme =>
      currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
    );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StatusBar
        animated={true}
        key={theme}
        barStyle={theme === Theme.DARK ? 'light-content' : 'dark-content'}
        backgroundColor={theme === Theme.DARK ? '#000' : '#fff'}
      />
      {children}
    </ThemeContext.Provider>
  );
};
