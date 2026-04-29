export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};
