import {Theme} from '@react-navigation/native';

export interface ThemeContextProps {
  theme: ThemeState; //TOFO
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
  btnText: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#0021AD',
    background: '#FFFFFF',
    card: 'pink',
    text: '#000',
    border: 'orange',
    notification: 'teal',
  },
  btnText: '#FFFFFF',
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#e100ff',
    background: '#000000',
    card: 'pink',
    text: '#FFF',
    border: 'orange',
    notification: 'teal',
  },
  btnText: '#000000',
};
