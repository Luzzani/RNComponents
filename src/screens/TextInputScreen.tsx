import React, {useContext} from 'react';
import {TextInput, View, StyleSheet, ScrollView, Text} from 'react-native';

import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {stylesSwitch} from './SwitchScreen';
import {useForm} from '../hooks/useForm';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {
  const {onChange, form, isSuscribe} = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribe: false,
  });

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <ScrollView>
      <View style={styles.containerApp}>
        <HeaderTitle title="TextInputScreen" />
        <TextInput
          style={{
            ...style.textInput,
            color: colors.text,
            borderColor: colors.text,
          }}
          placeholder="ingrese su nombre"
          autoCorrect={false}
          autoCapitalize="words"
          placeholderTextColor={colors.text}
          onChangeText={value => onChange(value, 'name')}
        />
        <TextInput
          style={{
            ...style.textInput,
            color: colors.text,
            borderColor: colors.text,
          }}
          placeholder="ingrese su email"
          placeholderTextColor={colors.text}
          autoCorrect={false}
          autoCapitalize={'none'}
          onChangeText={value => onChange(value, 'email')}
          keyboardType="email-address"
        />
        <TextInput
          placeholderTextColor={colors.text}
          style={{
            ...style.textInput,
            color: colors.text,
            borderColor: colors.text,
          }}
          placeholder="ingrese su teléfono"
          onChangeText={value => onChange(value, 'phone')}
          keyboardType="number-pad"
        />
        {/* is suscribe */}
        <View style={stylesSwitch.switchRow}>
          <Text style={stylesSwitch.swichText}>Suscribirme</Text>
          <CustomSwitch
            isOn={isSuscribe}
            onChange={value => onChange(value, 'isSuscribe')}
          />
        </View>

        <HeaderTitle title={JSON.stringify(form, null, 5)} />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});
