import React, {useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {FadeInImage} from '../components/FadeInImage';
import {HeaderTitle} from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const arrayNumber: number[] = [];
    for (let i = 0; i < 5; i++) {
      arrayNumber[i] = numbers.length + 1;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...arrayNumber]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/1024/1024`}
        styles={style.imageItem}
      />
      // <Image
      //   style={style.imageItem}
      //   source={{uri: `https://picsum.photos/id/${item}/200/300`}}
      // />
    );
  };

  const renderFooterList = () => {
    return (
      <View style={style.indicatorContainer}>
        <ActivityIndicator />
      </View>
    );
  };

  return (
    <View style={style.listContainer}>
      <FlatList
        data={numbers}
        keyExtractor={(item, index) => item.toString() + index}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="Infinite scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooterList}
      />
    </View>
  );
};

const style = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  textItem: {
    height: 150,
  },
  imageItem: {
    width: '100%',
    height: 400,
  },
  indicatorContainer: {
    height: 150,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
