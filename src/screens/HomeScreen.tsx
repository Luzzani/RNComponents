import React from 'react';
import {FlatList, View} from 'react-native';

import {styles} from '../theme/appTheme';
import {menuItem} from '../DUMMYDATA/dummyData';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {HeaderTitle} from '../components/HeaderTitle';
import {ItemSeparetor} from '../components/ItemSeparetor';

export const HomeScreen = () => {
  const renderListHeader = () => {
    return <HeaderTitle title={'Opciones de Menú'} />;
  };

  const renderSeparatorList = () => {
    return <ItemSeparetor />;
  };

  return (
    <View style={styles.containerApp}>
      <FlatList
        data={menuItem}
        ListHeaderComponent={renderListHeader}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={renderSeparatorList}
      />
    </View>
  );
};
