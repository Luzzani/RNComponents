import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView, RefreshControl} from 'react-native-gesture-handler';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('terminamos');
      setRefreshing(false);
      setData('Hola mundo');
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          //   progressBackgroundColor="#0021AD"
          style={style.bgRefreshing} //estilo solo aplicable en iOS
          title={'refreshing'} //solo aplicalbe en iOS
          colors={['#AD0021', '#0021AD']}
        />
      }>
      <View style={styles.containerApp}>
        <HeaderTitle title="Pull to refresh" />
        <Text style={{color: colors.text}}>{data}</Text>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  bgRefreshing: {backgroundColor: '#0021AD'},
});
