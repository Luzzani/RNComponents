import {
  ThemeState,
  lightTheme,
  darkTheme,
} from '../../interfaces/themeInterfaces';

type ThemeAction = {type: 'light-theme'} | {type: 'dark-theme'};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'dark-theme':
      return {...darkTheme};
    case 'light-theme':
      return {...lightTheme};

    default:
      return state;
  }
};
