import React from 'react';
import {useAnimation} from '../hooks/useAnimation';
import {
  ActivityIndicator,
  Animated,
  View,
  StyleSheet,
  StyleProp,
  ImageStyle,
} from 'react-native';
import {useState} from 'react';

interface Props {
  uri: string;
  styles: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, styles}: Props) => {
  const {fadeIn, opacity} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };
  return (
    <View>
      {isLoading && (
        <ActivityIndicator style={style.isLoading} color="#0021AD" size={30} />
      )}
      <Animated.Image
        source={{uri}}
        style={{...(styles as any), opacity}}
        onLoadEnd={finishLoading}
      />
    </View>
  );
};

const style = StyleSheet.create({
  isLoading: {
    position: 'absolute',
  },
});
