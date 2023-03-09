import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  View,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {items, Slide} from '../DUMMYDATA/dummyData';
import {useAnimation} from '../hooks/useAnimation';
import {useNavigation} from '@react-navigation/core';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const {width: screenWidth} = Dimensions.get('window');

export const SlidesScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {fadeIn, opacity, fadeOut} = useAnimation();
  const {
    theme: {colors, btnText},
  } = useContext(ThemeContext);

  const {navigate} = useNavigation();

  const renderItem = (item: Slide) => {
    return (
      <View style={{...style.itemSlide, backgroundColor: colors.background}}>
        <Image style={style.itemImage} source={item.img} />
        <Text style={{...style.title, color: colors.text}}>{item.title}</Text>
        <Text style={{...style.subTitle, color: colors.text}}>{item.desc}</Text>
      </View>
    );
  };

  const navigateToHome = () => {
    if (items.length === activeIndex + 1) {
      navigate('HomeScreen');
    }
  };

  return (
    <SafeAreaView style={style.containerCarousel}>
      <Carousel
        data={items}
        renderItem={({item}: any) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout={'default'}
        onSnapToItem={index => {
          setActiveIndex(index);
          if (items.length === index + 1) {
            fadeIn();
          } else {
            fadeOut();
          }
        }}
      />
      <View style={style.bottomContainer}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{...style.dotStyle, backgroundColor: colors.primary}}
        />
        <Animated.View style={{opacity}}>
          <TouchableOpacity
            style={{...style.tochableButton, backgroundColor: colors.primary}}
            activeOpacity={0.8}
            onPress={navigateToHome}>
            <Text style={{...style.buttonText, color: btnText}}>Entrar</Text>
            <Icon name="chevron-forward-outline" size={40} color={btnText} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  containerCarousel: {
    flex: 1,
    paddingTop: 50,
  },
  itemSlide: {
    flex: 1,

    padding: 40,
    borderRadius: 5,
    justifyContent: 'center',
  },
  itemImage: {
    width: 350,
    height: 400,
    resizeMode: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dotStyle: {
    width: 7,
    height: 7,
  },
  tochableButton: {
    flexDirection: 'row',
    backgroundColor: '#0021AD',
    width: 130,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
});
