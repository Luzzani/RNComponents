import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../theme/appTheme';
import {MenuItem} from '../interfaces/menuItemInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({
  menuItem: {icon, name, component},
}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate(component as never)}>
      <View style={styles.container}>
        <Icon name={icon} color="#5856D6" size={25} />
        <Text style={{...colors.black, ...styles.itemText}}>{name}</Text>
        <Icon
          style={styles.itemIcon}
          name={'chevron-forward-outline'}
          color="#5856D6"
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
