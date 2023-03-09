import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';

import {MenuItem} from '../interfaces/menuItemInterface';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({
  menuItem: {icon, name, component},
}: Props) => {
  const navigation = useNavigation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate(component as never)}>
      <View style={styles.container}>
        <Icon name={icon} color={colors.primary} size={25} />
        <Text style={{color: colors.text, ...styles.itemText}}>{name}</Text>
        <Icon
          style={styles.itemIcon}
          name={'chevron-forward-outline'}
          color={colors.primary}
          size={25}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 18,
  },
  itemIcon: {
    position: 'absolute',
    right: 5,
  },
});
