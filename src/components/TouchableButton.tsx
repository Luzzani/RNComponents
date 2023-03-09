import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {StyleSheet, Text} from 'react-native';

interface Props {
  callback: () => void;
  text: string;
}

const TouchableButton = ({callback, text}: Props) => {
  const {
    theme: {colors, btnText},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={callback}
      style={{
        backgroundColor: colors.primary,
        ...stylesComponent.touchableBtn,
      }}>
      <Text style={{color: btnText, ...stylesComponent.touchableText}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default TouchableButton;

const stylesComponent = StyleSheet.create({
  touchableBtn: {
    height: 50,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  touchableText: {
    fontSize: 20,
  },
});
