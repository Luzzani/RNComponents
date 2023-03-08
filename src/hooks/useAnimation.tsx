import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      useNativeDriver: true,
      duration: 300,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      useNativeDriver: true,
      duration: 300,
    }).start();
  };

  const startPosition = (
    initialPosition: number = -100,
    duration: number = 300,
    easing: boolean = false,
  ) => {
    position.setValue(initialPosition);
    Animated.timing(position, {
      toValue: 0,
      useNativeDriver: true,
      duration,
      easing: easing ? Easing.bounce : Easing.ease,
    }).start();
  };

  return {fadeIn, fadeOut, opacity, startPosition, position};
};

// Animated.timing(top, {
//     toValue: -100,
//     useNativeDriver: true,
//     duration: 800,
//   }).start();
