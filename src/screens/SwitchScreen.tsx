import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const onChange = (value: boolean, field: string) => {
    setState({...state, [field]: value});
  };

  return (
    <View style={stylesSwitch.container}>
      <HeaderTitle title="switches" />
      {/* is active */}
      <View style={stylesSwitch.switchRow}>
        <Text style={stylesSwitch.swichText}>isActive</Text>
        <CustomSwitch
          isOn={state.isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      {/* is hungry */}
      <View style={stylesSwitch.switchRow}>
        <Text style={stylesSwitch.swichText}>isHungry</Text>
        <CustomSwitch
          isOn={state.isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      {/* is happy */}
      <View style={stylesSwitch.switchRow}>
        <Text style={stylesSwitch.swichText}>isHappy</Text>
        <CustomSwitch
          isOn={state.isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>

      <Text style={stylesSwitch.swichText}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

export const stylesSwitch = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  swichText: {
    fontSize: 25,
  },
});
