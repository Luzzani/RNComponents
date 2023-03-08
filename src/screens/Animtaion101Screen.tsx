import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

export const Animtaion101Screen = () => {
  const {fadeIn, fadeOut, opacity, startPosition, position} = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [{translateY: position}],
        }}
      />
      <Button
        title="Fade In"
        onPress={() => {
          fadeIn();
          startPosition(-300, 800, true);
        }}
      />
      <Button title="Fade Out" onPress={fadeOut} />
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
