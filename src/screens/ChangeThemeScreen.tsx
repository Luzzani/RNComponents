import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {dark, colors, btnText},
  } = useContext(ThemeContext);

  const setThemeColor = () => {
    if (dark) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  return (
    <View style={styles.containerApp}>
      <HeaderTitle title="ChangeThemeScreen" />
      <TouchableOpacity
        style={{...style.button, backgroundColor: colors.primary}}
        activeOpacity={0.8}
        onPress={setThemeColor}>
        <Text style={{...style.textButton, color: btnText}}>Light / Dark</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 20,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 23,
  },
});
