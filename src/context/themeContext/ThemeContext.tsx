import React, {createContext, useEffect, useReducer} from 'react';
import {useColorScheme, AppState, Appearance} from 'react-native';
import {ChildrenProps} from '../../interfaces/interfaces';
import {
  ThemeContextProps,
  lightTheme,
  darkTheme,
} from '../../interfaces/themeInterfaces';
import {themeReducer} from './themeReducer';

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: ChildrenProps) => {
  const colorScheme = useColorScheme();

  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);

  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  const setDarkTheme = () => {
    dispatch({type: 'dark-theme'});
    console.log('setDark');
  };
  const setLightTheme = () => {
    dispatch({type: 'light-theme'});
    console.log('setLigh');
  };

  return (
    <ThemeContext.Provider value={{setDarkTheme, setLightTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
