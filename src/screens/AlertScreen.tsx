import React from 'react';
import {View, Alert, StyleSheet} from 'react-native';

import prompt from 'react-native-prompt-android';

import {HeaderTitle} from '../components/HeaderTitle';
import TouchableButton from '../components/TouchableButton';
import {styles} from '../theme/appTheme';

const showPrompt = () => {
  prompt(
    'Enter password',
    'Enter your password to claim your $1.5B in lottery winnings',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: password => console.log('OK Pressed, password: ' + password),
      },
    ],
    {
      type: 'secure-text',
      cancelable: false,
      defaultValue: 'test',
      placeholder: 'placeholder',
    },
  );

  //Solo en iOS
  // Alert.prompt(
  //   '¿Está seguro?',
  //   'Esta acción no se puede revertir',
  //   (valor: string) => console.log('info', valor),
  //   'plain-text',
  //   'Hola Mundo',
  // );
};

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel pressed'),
          style: 'cancel',
        },
        {
          text: 'ok',
          onPress: () => console.log('Ok pressed'),
        },
      ],
      //   {
      //     cancelable: true,
      //     onDismiss: () => console.log('Dismiss pressed'),
      //   },
    );
  };

  return (
    <View style={styles.containerApp}>
      <HeaderTitle title="Alerts" />

      <TouchableButton callback={showAlert} text="Mostrar Alerta" />

      <View style={style.separetor} />

      <TouchableButton callback={showPrompt} text="Mostrar Prompt" />
    </View>
  );
};

const style = StyleSheet.create({
  separetor: {
    height: 10,
  },
});
