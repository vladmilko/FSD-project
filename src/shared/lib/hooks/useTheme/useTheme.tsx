import { useContext } from 'react';
import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localstorage';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const themeObject: Record<Theme, Theme> = {
      [Theme.DARK]: Theme.LIGHT,
      [Theme.LIGHT]: Theme.ORANGE,
      [Theme.ORANGE]: Theme.DARK,
    };

    const newTheme: Theme = theme ? themeObject[theme] : Theme.LIGHT;

    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
}
