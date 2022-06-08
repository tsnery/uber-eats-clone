import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {THeaderImageProps} from './types';

const backgroundImage = require('../../../assets/images/background.jpeg');
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export const HEADER_IMAGE_HEIGHT = windowHeight / 3;

export function HeaderImage({scrollY}: THeaderImageProps) {
  const heightAnimationStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [-100, 0],
        [HEADER_IMAGE_HEIGHT + 100, HEADER_IMAGE_HEIGHT],
        Extrapolate.CLAMP,
      ),
    };
  });
  const topAnimationStyle = useAnimatedStyle(() => {
    const top = interpolate(
      scrollY.value,
      [0, HEADER_IMAGE_HEIGHT],
      [0, -HEADER_IMAGE_HEIGHT],
      Extrapolate.CLAMP,
    );
    return {
      top,
    };
  });

  return (
    <Animated.Image
      source={backgroundImage}
      style={[styles.image, heightAnimationStyle, topAnimationStyle]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: windowWidth,
    height: HEADER_IMAGE_HEIGHT,
    resizeMode: 'cover',
  },
});
