import 'react-native-gesture-handler';

import React from 'react';
import {Navigation} from './src/navigation/Navigation';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';
import {ChildrenProps} from './src/interfaces/interfaces';

export const App = () => {
  return (
    <AppState>
      <Navigation />
    </AppState>
  );
};

const AppState = ({children}: ChildrenProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
