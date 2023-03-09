import React, {useContext} from 'react';
import {View} from 'react-native';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ItemSeparetor = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={{...styles.menuItemSeparetor, borderColor: colors.text}} />
  );
};
