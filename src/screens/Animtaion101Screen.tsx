import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import TouchableButton from '../components/TouchableButton';

export const Animtaion101Screen = () => {
  const {fadeIn, fadeOut, opacity, startPosition, position} = useAnimation();

  const animationIn = () => {
    startPosition(-300, 800, true);
    fadeIn();
  };

  const animationOut = () => {
    fadeOut();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [{translateY: position}],
        }}
      />

      <TouchableButton callback={animationIn} text={'Fade in'} />
      <TouchableButton callback={animationOut} text={'Fade out'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#0021AD',
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
